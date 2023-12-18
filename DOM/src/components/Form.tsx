import * as React from "react";
import VybzTech from "../../public/Vybz Logo.png";
import SignUp from "./SignUp";
import { GoogleOAuthProvider } from '@react-oauth/google';

const Form: React.FC = () => {
  return (
    <div
      className="formWrapper bg-[#292929] mt-10 py-8 m-auto text-center
     max-h-[90vh] max-w-[90%] rounded rounded-3xl 
     sm:max-w-[70%] sm:px-6
     md:max-w-[50%]"
    >
      <div className="hero w-fit mx-auto mb-8">
        <div className="flex items-center justify-center">
          <img className="w-7 mr-2 invert" src={VybzTech} alt="VybzTech Logo" />
          <p className="text-xl text-white text-xl">VybzTech .Inc</p>
        </div>
        <span className="mb-8 tracking-tighter italic text-zinc-500 text-xs sm:text-[0.7rem]">
          We guarantee your project's success
        </span>
      </div>
      <SignUp />
      <div className="divider mt-0.5 flex items-center justify-evenly">
        <div className="fadePill w-full mx-2.5 h-0.5"/>
        <span>OR</span>
        <div className="fadePill right w-full mx-2.5 h-0.5"></div>
      </div>
      {/* GOOGLE AUTH */}

<GoogleOAuthProvider clientId="<your_client_id>">...</GoogleOAuthProvider>;
      {/* FACEBOOK AUTH */}
    </div>
  );
};

export default Form;
