import "./App.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

//import axios from "axios";
//import { useGoogleLogin } from "@react-oauth/google";

function Auth() {
  const client = window.google.accounts.oauth2.initTokenClient({
    client_id:
      "248005865613-j5nc0j164et50emv7g18ap21l64bi07q.apps.googleusercontent.com",
    redirect_uri: "https://kgriffo.github.io/auth/protected",
    response_type: "token id_token",
    scope: "openid",
    callback: (tokenResponse) => {
      console.log("Token Response:", tokenResponse); //for testing
      window.location.href = "/protected";
    },
  });

  return (
    <>
      <Router>
        <div>
          <Switch>
            <Route path="/public">
              <h1>Public Page</h1>
            </Route>
            <Route path="/protected">
              <h1>Protected Page</h1>
            </Route>
          </Switch>
        </div>
      </Router>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Google OAuth Test</h1>
        <button onClick={() => client.requestAccessToken()}>Log in</button>
        {/* <button onClick={() => googleLogin()}>Login with Google</button> */}
      </div>
    </>
  );
}

export default Auth;

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
