import SignUp from "./Form";
import React from "react";

const Auth = ({ props }) => {
  // const {email} = props;
  // console.log(props);
  const user = {
    name: props?.name ?? props?.display_name.split(" ")[0],
    image: props?.picture ?? props?.images[0]?.url,
    email: props.email,
  };

  if (props) {
    return (
      <>
        <img className='w-16 rounded rounded-[10rem] object-contain' src={user.image} alt="User's  image" />
        <h3>Signed In as: {user.email}</h3>
        <p>Name: {user.name}</p>
        {/* <p>Email Address: {user.email}</p> */}
      </>
    );
  }
  return <SignUp />;
};

export default Auth;
