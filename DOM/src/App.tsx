// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import * as React from "react";
import "./App.css";
import Form from "./Components/Form";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  // const [count, setCount] = useState(0)
  const ID = import.meta.env.VITE_ClientID;
  //  env.REACT_APP_ClientID;
  if (!ID) {
    console.error("API key not found. Please check your environment variables.");
  }
  return (
    <GoogleOAuthProvider clientId={ID}>
      <div className="App w-full h-[100vh]">
        <Form />
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;
