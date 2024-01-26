const authEndPoints = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:5173/";

const scopes = ["user-read-email", "user-read-private"];

export const LogIn_Url = `${authEndPoints}?client_id=${
  import.meta.env.VITE_SPOTIFY_ClientID
}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;


export const getTokenFromUrl = () => {
  //   http://localhost:5173/#access_token=BQDfKsLDHFCsqVMd7vOndB02MQfYjO6OnPDaRc4KXZqVI4LWCEnSgcCONpiu4jT2foywoArA1UgU9PuAIU4IQ7HQWvtGIvTHRum1AOUMgrvrzC9_7H0ssKn0ouEcQkosI3ot0wbudTeRUYbJVqWcEjjCjEYuvLylODZeFOtZVX4_x6lYXacZN5B3ofoxZbiO2o9kS5hnmP9DzQwkzwY&token_type=Bearer&expires_in=3600
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      let parts = item.split("=");
      // console.log("Intital", initial[parts[0]]);
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
};
