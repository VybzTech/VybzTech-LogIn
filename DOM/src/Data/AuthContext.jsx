import { createContext, useContext, useEffect, useState } from 'react';
import { getTokenFromUrl } from "./Spotify";

const AuthContextProvider = createContext();

export const AuthContext = ({ children }) => {
  
  const [accessToken, setAccessToken] = useState(null);

// useEffect(()={
//   // getTokenFromUrl().access_token
//   var tkn = getTokenFromUrl()?.access_token;
//   setAccessToken()
// },[]);

  const login = (token) => {
  //   setAccessToken(token);
  //   // Additional login logic if needed
  };

  const logout = () => {
  //   setAccessToken(null);
  //   // Additional logout logic if needed
  };

  return (
    <AuthContext.Provider value={{ accessToken, login, logout ,setAccessToken}}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContextProvider);
};