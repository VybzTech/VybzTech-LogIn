import React from "react";
// import SignUp from "./Sign  Up";
// import { GoogleLogin, useGoogleLogin, googleLogout } from "@react-oauth/google";
import { getTokenFromUrl } from "./Spotify";
import axios from "axios";
import SpotifyWebApi from "spotify-web-api-js";
import { useState } from "react";
import { toast } from "react-hot-toast";
import Hero from "./Hero";
import Divider from "./Divider";
import Auth from "./Auth";
import Providers from "./Providers";
import { GoogleLogin } from "@react-oauth/google";

const Container = () => {
  const spotifyApi = new SpotifyWebApi();
  const [user, setUser] = useState(null);
  const [GoogleProfile, setGoogleProfile] = React.useState(null);
  const [SpotifyProfile, setSpotifyProfile] = React.useState(null);

  // const login = useGoogleLogin({
  //   onSuccess: (userResponse) => {
  //     // setUser(userResponse);
  //     setGoogleProfile(userResponse);
  //   },
  //   onError: (error) => console.log("Login Failed:", error),
  // });

  // const [spotifyToken, setSpotifyToken] = useState("");
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
            toast.error(`Error logging in with Google ${err?.name}`);
            GoogleProfile && toast.error("Error logging in with Google");
          }
          // RUN ERROR- MESSAGE
        );
      // console.log("Here's your Gmail profile ", GoogleProfile);
    }

    // SPOTIFY API
    const _spotifyToken = getTokenFromUrl().access_token;
    if (_spotifyToken) {
      // setSpotifyToken(_spotifyToken);
      spotifyApi.setAccessToken(_spotifyToken);
      spotifyApi.getMe().then((user) => {
        setSpotifyProfile(user);
        setUser(user);
      });
    }
  // }, []);
  }, [GoogleProfile]);
  // }, [GoogleProfile, SpotifyProfile]);

  return (
    <div
      className="formWrapper bg-[#292929] my-12 mb-16 pb-16 py-8 m-auto 
      text-center rounded rounded-3xl min-w-[60%] max-w-[90%] px-10
      sm:max-w-[70%] sm:px-8 
      md:max-w-[50%] 
      lg:px-14 lg:min-w-[30%] lg:max-w-[45%]"
    >
      <Hero />
      {/*  AUTH */}
      {/* {console.log(user)} */}
      <Auth props={user} />
      {console.log(GoogleProfile)}
      {/* DIVIDER */}
      <Divider />
      <Providers
        GoogleProfile={GoogleProfile}
        setGoogleProfile={setGoogleProfile}
      />
    </div>
  );
};
// 🚀

export default Container;
