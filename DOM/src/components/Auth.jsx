import SignUp from "./Form";
import React from "react";

const Auth = ({ props }) => {
  // const {email} = props;
  // console.log(props);
  const user = {
    name: props?.name ?? props?.display_name.split(" ")[0],
    image: props?.picture ?? props?.images[0]?.url,
    email: props?.email,
  };

  if (props) {
    return (
      <>
        <img
          className="w-24 rounded rounded-[10rem] object-contain m-auto"
          src={user?.image}
          alt="User's  image"
        />
        <h3 className="text-gray-100 mt-5">Name: {user?.name}</h3>
        <p className="text-gray-300 text-sm font-sans">Signed In as: {user?.email}</p>
      </>
    );
  }
  return <SignUp />;
};

export default Auth;
