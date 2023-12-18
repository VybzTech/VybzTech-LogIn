import React, { useState } from "react";
import Input from "./input";

const SignUp: React.FC = () => {
  const [userName, setUser] = useState<string>("");
  const [lastName, setLast] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPass] = useState<string>("");
  return (
    <div className="">
      <h3 className="text-white text-xl tracking-tight">Sign Up to Proceed</h3>
      <form className="px-4 mt-6">
        {/* USER NAME */}
        <div className="flex gap-3 w-full">
          <Input value={userName} setter={setUser} placeholder={"First Name"} />
          <Input value={lastName} setter={setLast} placeholder={"Last Name"} />
        </div>
        {/* EMAIL & PASSWORD */}
        <Input value={email} setter={setEmail} placeholder={"Email"} />
        <Input value={password} setter={setPass} placeholder={"Password"} type='password' />
      </form>
    </div>
  );
};

export default SignUp;
