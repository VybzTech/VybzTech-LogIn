import * as React from "react";
import "./App.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Container from "./Components/Container";

function App() {
  const ID = import.meta.env.VITE_GOOGLE_ClientID;
  if (!ID) {
    console.error(
      "Google API key not found. Please check your environment variables."
    );
  }
  return (
    <GoogleOAuthProvider clientId={ID}>
      <div className="App w-full">
        <Container />
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;
