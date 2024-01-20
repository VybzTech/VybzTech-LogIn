import * as React from "react";
import VybzTech from "../VybzTech.png";
import SignUp from "./SignUp";
import { GoogleLogin, googleLogout } from "@react-oauth/google";

import axios from "axios";

type Profile = {
  name: string;
  picture: string;
  email: string;
};

const Form: React.FC = () => {
  const [user, setUser] = React.useState<[]>([]);
  const [profile, setProfile] = React.useState<Profile>();
  //   const [profile, setProfile] = React.useState<Profile>([]);

  // const login = useGoogleLogin({
  //     onSuccess: (codeResponse) => setUser(codeResponse),
  //     onError: (error) => console.log('Login Failed:', error)
  // });

  const responseMessage = (response) => {
    console.log(response);
    setUser(response);
  };
  const errorMessage = (error) => {
    console.log(error);
  };

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
        .catch((err) => console.log(err));
    }
  }, [user]);

  const logOut = () => {
    googleLogout();
    setProfile(null);
  };

  return (
    <div
      className="formWrapper bg-[#292929] mt-10 py-8 m-auto text-center
     max-h-[90vh] max-w-[90%] rounded rounded-3xl 
     sm:max-w-[70%] sm:px-6
     md:max-w-[50%]"
    >
      <div className="hero w-fit mx-auto mb-8">
        <div className="flex items-center justify-center">
          <img className="w-8 mr-2" src={VybzTech} alt="VybzTech Logo" />
          <p className="text-xl text-white text-xl">VybzTech .Inc</p>
        </div>
        <span className="mb-8 tracking-tighter italic text-zinc-500 text-xs sm:text-[0.7rem]">
          We guarantee your project's success
        </span>
        {/*  AUTH */}
      </div>
      {profile ? (
        <>
          <h3>Signed In</h3>
          <img src={profile.picture} alt="user image" />
          <p>Name: {profile.name}</p>
          <p>Email Address: {profile.email}</p>
        </>
      ) : (
        <SignUp />
      )}

      <div className="divider mt-0.5 flex items-center justify-evenly">
        <div className="fadePill w-full mx-2.5 h-0.5" />
        <span>OR</span>
        <div className="fadePill right w-full mx-2.5 h-0.5"></div>
      </div>
      {/* GOOGLE AUTH */}
      <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
      {/* SPOTIFY AUTH */}
    </div>
  );
};

export default Form;
