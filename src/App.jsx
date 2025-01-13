import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import "./App.css";

function Auth() {
  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      if (tokenResponse.authuser == "0") {
        return;
      }
      if (tokenResponse.authuser == "0") {
        console.log("Unauthorized user; login failed.");
        alert("Unauthorized user; login failed.");
      }
      console.log(tokenResponse);
      const userInfo = await axios.get(
        "https://www.googleapis.com/oauth2/v3/userinfo",
        { headers: { Authorization: `Bearer ${tokenResponse.access_token}` } }
      );

      console.log(userInfo);
      alert("Login successful!");
    },
    onError: (errorResponse) => console.log(errorResponse),
  });
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Google OAuth Test</h1>
      <button onClick={() => googleLogin()}>Login with Google</button>
    </div>
  );
}

export default Auth;
