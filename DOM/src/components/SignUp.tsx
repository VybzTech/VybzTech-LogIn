import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";

const SignUp: React.FC = () => {
  const [userName, setUser] = useState<string>("");
  const [lastName, setLast] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPass] = useState<string>("");

  const SaveUser: object = () => {
    console.log("save user");
    const obj: {
      name: string;
      type: string;
      class: string;
    } = { name: "sfvg", type: "evfd", class: "btrv" };
    return obj;
  };
  return (
    <div className="">
      <h3 className="text-white text-xl tracking-tight">Sign Up to Proceed</h3>
      <form className="px-5 mt-5">
        {/* USER NAME */}
        <div className="flex gap-3 w-full">
          <Input value={userName} setter={setUser} placeholder={"First Name"} />
          <Input value={lastName} setter={setLast} placeholder={"Last Name"} />
        </div>
        {/* EMAIL & PASSWORD */}
        <Input value={email} setter={setEmail} placeholder={"Email"} />
        <Input
          value={password}
          setter={setPass}
          placeholder={"Password"}
          type="password"
        />
        <div className="signup mt-10">
          <Button name={"Sign Up"} clicked={SaveUser} />
          <span>By clicking sign up, you agree to our 
          <span> Terms of Service </span>and
          <span> Privacy Policy</span>.
          </span>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
