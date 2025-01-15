import "./App.css";
import axios from "axios";
import { google } from "google";
import { useGoogleLogin } from "@react-oauth/google";

function Auth() {
  const client = google.accounts.oauth2.initTokenClient({
    client_id:
      "248005865613-j5nc0j164et50emv7g18ap21l64bi07q.apps.googleusercontent.com",
    callback: "onTokenResponse",
    scope: "openid email profile", //basic scope included since scope is required here
  });

  // client.requestAccessToken();
  // const googleLogin = useGoogleLogin({
  //   onSuccess: async (tokenResponse) => {
  //     if (tokenResponse.authuser == "1") {
  //       console.log(tokenResponse);
  //       const userInfo = await axios.get(
  //         "https://www.googleapis.com/oauth2/v3/userinfo",
  //         { headers: { Authorization: `Bearer ${tokenResponse.access_token}` } }
  //       );

  //       console.log(userInfo);
  //       alert("Login successful!");
  //     } else {
  //       console.log("Unauthorized user; login failed.");
  //       // Timeout needed to ensure Google login pop-up closes before alert appears
  //       setTimeout(() => {
  //         alert("Unauthorized user; login failed.");
  //       }, 100);
  //     }
  //   },
  //   onError: (errorResponse) => console.log(errorResponse),
  // });
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Google OAuth Test</h1>
      <button onClick={() => client.requestAccessToken()}>Authorize me</button>
      {/* <button onClick={() => googleLogin()}>Login with Google</button> */}
    </div>
  );
}

export default Auth;
