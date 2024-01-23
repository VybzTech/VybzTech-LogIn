import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import SpotifyIcon from "../Images/SpotifyPng.png";
import GmailIcon from "../Images/GmailPng.png";
import { LogIn_Url } from "./Spotify";

const Providers = (google) => {
  const login = useGoogleLogin({
    onSuccess: (userResponse) => {
      // setUser(userResponse);
      google(userResponse);
    },
    onError: (error) => console.log("Login Failed:", error),
  });

  //   const logOut = () => {
  //     googleLogout();
  //     setGoogleProfile(null);
  //     setUser({});
  //   };

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
