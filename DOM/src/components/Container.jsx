import React from "react";
import VybzTech from "../VybzTech.png";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import { LogIn_Url } from "./Spotify";
import axios from "axios";
import Form from "./Form";

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
      className="formWrapper bg-[#292929] my-10 mb-24 pb-16 py-8 m-auto 
      text-center max-w-[90%] rounded rounded-3xl min-w-[60%]
      sm:max-w-[70%] sm:px-6 
      md:max-w-[50%] lg:px-14"
    >
      {/*  HERO  */}
      <div className="hero w-fit mx-auto mb-8">
        <div className="flex items-center justify-center">
          <img className="w-7 mr-1.5" src={VybzTech} alt="VybzTech Logo" />
          <p className="text-2xl text-white tracking-wider pt-1">
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
      <div className="divider mt-0.5 flex items-center justify-evenly">
        <div className="fadePill w-full mx-2.5 h-0.5" />
        <span>OR</span>
        <div className="fadePill right w-full mx-2.5 h-0.5"></div>
      </div>
      {/* GOOGLE AUTH */}
      <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
      {/* SPOTIFY AUTH */}
      <div className="w-full h-max">
        <a
          href={LogIn_Url}
          className="
h-full inline-block w-[88%] bg-green-400 text-white font-sans rounded rounded-3xl tracking-tight font-semibold hover:tracking-normal
p-3.5 "
          //   px-6 pb-4
        >
          Log In with Spotify
        </a>
      </div>
    </div>
  );
};

export default Container;
