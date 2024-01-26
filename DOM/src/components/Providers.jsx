import React, { useState } from "react";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import SpotifyIcon from "../Images/SpotifyPng.png";
import GmailIcon from "../Images/GmailPng.png";
import { LogIn_Url } from "../Data/Spotify";

const Providers = ({ spotted, googleProfile, setGoogleProfile }) => {
  const [goog, setGoog] = useState(false);

  const login = useGoogleLogin({
    // console.log(userResponse);
    onSuccess: (userResponse) => {
      // setUser(userResponse);
      console.log("userResponse", userResponse);
      setGoogleProfile(userResponse);
      setGoog((f) => (f = !f));
    },
    onError: (error) => console.log("Login Failed:", error),
  });

  const logOut = () => {
    googleLogout();
    setGoogleProfile(null);
    // setUser({});
  };

  if (goog) {
    return (
      <button
        className="pillBtn flex items-center justify-center  text-black bg-gray-100 hover:bg-gray-200"
        onClick={() => logOut()}
      >
        <img className="w-5 mr-3" src={GmailIcon} alt="Spotify Image Png" />
        Sign Out
      </button>
    );
  }
  if (spotted) {
    return (
      <a
        // href="https://www.spotify.com/fr/logout/show_dialog=true"
        className="pillBtn flex items-center justify-center bg-green-500 text-white  hover:bg-green-600"
      >
        <img className="w-5 mr-5" src={SpotifyIcon} alt="Spotify Image Png" />
        Log Out
      </a>
    );
  }

  return (
    <div className="h-max mt-5 m-auto [&>div]:justify-center [&>div]:flex [&>div]:mb-4">
      {/* GOOGLE AUTH */}
      <button
        className="pillBtn flex items-center justify-center  text-black bg-gray-100 hover:bg-gray-200"
        onClick={() => login()}
      >
        <img className="w-5 mr-3" src={GmailIcon} alt="Spotify Image Png" />
        Sign up with Google
      </button>
      {/* SPOTIFY AUTH */}
      <a
        href={LogIn_Url}
        className="pillBtn flex items-center justify-center bg-green-500 text-white hover:bg-green-600"
      >
        <img className="w-5 mr-3" src={SpotifyIcon} alt="Spotify Image Png" />
        Log In with Spotify
      </a>
    </div>
  );
};

export default Providers;
