import React from "react";
import SignUp from "./SignUp";
import { GoogleLogin, useGoogleLogin, googleLogout } from "@react-oauth/google";
import { LogIn_Url, getTokenFromUrl } from "./Spotify";
import axios from "axios";
import Form from "./Form";
import SpotifyWebApi from "spotify-web-api-js";
import { useState } from "react";
import { toast } from "react-hot-toast";
import Hero from "./Hero";
import Divider from "./Divider";

const Container = () => {
  const spotifyApi = new SpotifyWebApi();
  const [user, setUser] = React.useState(null);
  const [GoogleProfile, setGoogleProfile] = React.useState(null);
  const [SpotifyProfile, setSpotifyProfile] = React.useState(null);

  const login = useGoogleLogin({
    onSuccess: (userResponse) => {
      // setUser(userResponse);
      setGoogleProfile(userResponse);
    },
    onError: (error) => console.log("Login Failed:", error),
  });

  const [spotifyToken, setSpotifyToken] = useState("");

  React.useEffect(() => {
    if (GoogleProfile) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${GoogleProfile.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${GoogleProfile.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          // SET USER's PROFILE
          setUser(res.data);
          // SEND RECEIVED USED TOAST
          toast.success(`Welcome Mr ${res.data.given_name}`);
          // options?: Partial<Pick<Toast, "id" | "icon" | "duration" | "ariaProps" | "className" | "style" | "position" | "iconTheme">> | undefined): string
          // setGoogleProfile(res.data);
        })
        .catch(
          (err) => {
            console.log(err);
            console.log(GoogleProfile);
            GoogleProfile && toast.error("Error logging in with Google");
          }
          // RUN ERROR- MESSAGE
        );
      // console.log("Here's your Gmail profile ", GoogleProfile);
    }

    // SPOTIFY API
    // console.log("This is our dervided token", getTokenFromUrl());
    const _spotifyToken = getTokenFromUrl().access_token;
    // console.log("This is your Token", _spotifyToken);
    // window.location.hash=""
    if (_spotifyToken) {
      setSpotifyToken(_spotifyToken);
      spotifyApi.setAccessToken(_spotifyToken);

      spotifyApi.getMe().then((user) => {
        console.log("DIS IS YOU", user);
      });
      setSpotifyProfile;
    }

    console.log("This is User", user);
  }, [GoogleProfile, SpotifyProfile]);

  const logOut = () => {
    googleLogout();
    setGoogleProfile(null);
    setUser({});
  };

  return (
    <div
      className="formWrapper bg-[#292929] my-12 mb-16 pb-16 py-8 m-auto 
      text-center max-w-[90%] rounded rounded-3xl min-w-[60%]
      sm:max-w-[70%] sm:px-6 
      md:max-w-[50%] lg:px-14"
    >
      <Hero />
      {/*  AUTH */}
      {/* <Form props={user} /> */}

      {/* console.log(props);
  const { name, picture, email } = props; */}

      {user ? (
        <>
          <h3>Signed In</h3>
          <img src={user.picture} alt="user image" />
          <p>Name: {user.name}</p>
          <p>Email Address: {user.email}</p>
        </>
      ) : (
        <SignUp />
      )}
      {/* DIVIDER */}
      <Divider />

      <div className="h-max w-[70%] mt-5 m-auto [&>div]:justify-center [&>div]:flex [&>div]:mb-3">
        {/* GOOGLE AUTH */}
        <button onClick={() => login()}>Sign in with Google 🚀 </button>
        {/* SPOTIFY AUTH */}
        <a
          href={LogIn_Url}
          className=" h-full inline-block w-full bg-green-500 transition-all
          text-white font-sans rounded rounded-[4rem] tracking-tight 
          font-semibold p-4 mt-3 hover:tracking-normal duration-300"
        >
          <img src="" alt="" />
          Log In with Spotify
        </a>
      </div>
    </div>
  );
};

export default Container;
