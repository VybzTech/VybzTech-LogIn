const authEndPoints = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:5173/";

const scopes = ["user-read-email", "user-read-private"];

export const LogIn_Url = `${authEndPoints}?client_id=${
  import.meta.env.VITE_SPOTIFY_ClientID
}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

export const getTokenFromUrl = () => {
  // return window.location.hash.substring(1).split('&').reduce(initial,item=>{
  //   // accessToken=mysecretkey&name=svjefndvjdntjgfdjvvf
  //   let parts =item.split(
  //     "="
  //   );
  //   initial[parts[0]]= decodeURIComponent(parts[1])

  //   return initial
  // })
  console.log(window.location.hash);
  return "";
};
