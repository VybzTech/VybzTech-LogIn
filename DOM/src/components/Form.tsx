import * as React from "react";
import SignUp from "./SignUp";

type Profile = {
  props: {
    name: string;
    picture: string;
    email: string;
  };
};

const Form: React.FC = ({ props }: Profile) => {
  console.log(props);
  const { name, picture, email } = props;

  if (props) {
    <>
      <h3>Signed In</h3>
      <img src={picture} alt="user image" />
      <p>Name: {name}</p>
      <p>Email Address: {email}</p>
    </>;
  }
  return <SignUp />;
};

export default Form;
