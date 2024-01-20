export const authEndPoints = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:5173/";

const scopes = ["user-read-email", "user-read-private"];

export const LogIn_Url = `${authEndPoints}?client_id=${process.env}`
