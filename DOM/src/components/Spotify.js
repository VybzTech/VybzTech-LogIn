const authEndPoints = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:5173/";

const scopes = ["user-read-email", "user-read-private"];

export const LogIn_Url = `${authEndPoints}?client_id=${
  import.meta.env.VITE_SPOTIFY_ClientID
}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
