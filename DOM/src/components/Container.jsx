import React from "react";
import VybzTech from "../VybzTech.png";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import { LogIn_Url, getTokenFromUrl } from "./Spotify";
import axios from "axios";
import Form from "./Form";
import SpotifyWebApi from "spotify-web-api-js";
import { useState } from "react";

// type Profile = {
//   name: string;
//   picture: string;
//   email: string;
// };

const Container = () => {
  //   const [user, setUser] = React.useState<[]>([]);
  //   const [profile, setProfile] = React.useState<Profile>();
  //   const [profile, setProfile] = React.useState<Profile>([]);

  // const login = useGoogleLogin({
  //     onSuccess: (codeResponse) => setUser(codeResponse),
  //     onError: (error) => console.log('Login Failed:', error)
  // });

  const [user, setUser] = React.useState([]);
  const [profile, setProfile] = React.useState();
  // console.log(profile);

  const responseMessage = (response) => {
    console.log(response);
    setUser(response);
  };
  const errorMessage = (error) => {
    console.log(error);
  };

  const spotifyApi = new SpotifyWebApi();
  const [spotifyToken, getSpotifyToken] = useState("");

  React.useEffect(() => {
    if (user) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          setProfile(res.data);
        })
        .catch((err) => console.log(err)
        
        // RUN ERRO MESSGAE
        );
    }

    // SPOTIFY API
    console.log("This is our dervided token", getTokenFromUrl());
  }, [user]);

  const logOut = () => {
    googleLogout();
    setProfile(null);
  };

  return (
    <div
      className="formWrapper bg-[#292929] my-12 mb-16 pb-16 py-8 m-auto 
      text-center max-w-[90%] rounded rounded-3xl min-w-[60%]
      sm:max-w-[70%] sm:px-6 
      md:max-w-[50%] lg:px-14"
    >
      {/*  HERO  */}
      <div className="hero w-fit mx-auto mb-11">
        <div className="flex items-center justify-center">
          <img className="w-7 mr-1.5" src={VybzTech} alt="VybzTech Logo" />
          <p className="text-3xl text-white tracking-wider pt-1">
            VybzTech .Inc
          </p>
        </div>
        <span
          className="mb-8 tracking-tighter italic text-zinc-500 text-xs
         sm:text-[0.8rem]"
        >
          We guarantee your project's success
        </span>
      </div>
      {/*  AUTH */}
      <Form props={profile} />
      {/* DIVIDER */}
      <div className="divider mt-0.5 flex items-center justify-evenly">
        <div className="fadePill w-full mx-2.5 h-0.5" />
        <span>OR</span>
        <div className="fadePill right w-full mx-2.5 h-0.5"></div>
      </div>

      <div className="h-max w-[70%] mt-5 m-auto [&>div]:justify-center [&>div]:flex [&>div]:mb-3">
        {/* GOOGLE AUTH */}
        <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
        {/* SPOTIFY AUTH */}
        <a
          href={LogIn_Url}
          className=" h-full inline-block w-full bg-green-500 transition-all
          text-white font-sans rounded rounded-[4rem] tracking-tight 
          font-semibold p-4 mt-3 hover:tracking-normal duration-300"
        >
          Log In with Spotify
        </a>
      </div>
    </div>
  );
};

export default Container;
