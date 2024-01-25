import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";

const Form: React.FC = () => {
  const [firstName, setUser] = useState<string>("");
  const [lastName, setLast] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPass] = useState<string>("");
  type FormModel = {
    Password: string;
    Email: string;
    isActive: number;
    UserName: string;
  };

  const SaveUser = () => {
    //: object
    const obj: FormModel = {
      Password: password,
      Email: email,
      isActive: 0,
      UserName: firstName + " " + lastName,
    };

    console.log("save user", obj);
    // return obj;
  };
  return (
    <div className="Form">
      <h3 className="text-white text-3xl tracking-tight">
        Join our <span className="text-blue-600 font-bold">Team</span> ❗
      </h3>
      <form className="mt-6 sm:mt-9" onSubmit={SaveUser}>
        {/* USER NAME */}
        <div className="sm:flex gap-3 w-full">
          <Input
            value={firstName}
            setter={setUser}
            placeholder={"First Name"}
          />
          <Input value={lastName} setter={setLast} placeholder={"Last Name"} />
        </div>
        {/* EMAIL & PASSWORD */}
        <Input
          value={email}
          setter={setEmail}
          placeholder={"Email"}
          type={"email"}
        />
        <Input
          value={password}
          setter={setPass}
          placeholder={"Password"}
          type="password"
        />
        <div className="signup mt-6 mb-4">
          <Button name={"Sign Up"} />
          <span>
            By clicking sign up, you agree to our
            <span> Terms of Service </span>and
            <span> Privacy Policy</span>.
          </span>
        </div>
      </form>
    </div>
  );
};

export default Form;
