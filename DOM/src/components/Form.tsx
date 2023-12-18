import * as React from "react";
import VybzTech from "../../public/Vybz Logo.png";
import SignUp from "./SignUp";

const Form: React.FC = () => {
  return (
    <div className="formWrapper bg-[#292929] mt-10 py-8 m-auto text-center max-h-[90vh] max-w-[90%] rounded rounded-xl">
      <div className="hero w-fit mx-auto mb-5">
        <div className="flex items-center justify-center">
          <img
            className="w-10 mr-2 invert"
            src={VybzTech}
            alt="VybzTech Logo"
          />
          <p className="text-white font-bold text-xl font-mono tracking-wide">
            VybzTech
          </p>
        </div>
        <span className="mb-8 tracking-tight italic text-zinc-500 text-xs">
          We guarantee your project's success
        </span>
      </div>
      <SignUp />
    </div>
  ); 
};

export default Form;
