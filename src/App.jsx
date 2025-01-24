/* eslint-disable react/prop-types */
import "./App.css";
import { useEffect, useContext, createContext } from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

const AuthProvider = ({ children }) => {
  console.log("fired auth provider");
  const [isAuthenticated, setIsAuthenticated] = false;
  const token = localStorage.getItem("id_token");
  if (token) {
    setIsAuthenticated(true);
  }
  console.log(isAuthenticated, "checking auth state in App.jsx");
  return (
    <AuthContext.Provider value={{ isAuthenticated, token }}>
      {children}
    </AuthContext.Provider>
  );
};

const AuthContext = createContext();

const UseAuth = () => {
  console.log("fired use auth");
  return useContext(AuthContext);
};

const { isAuthenticated } = UseAuth();

function Auth(setIsAuthenticated) {
  useEffect(() => {
    // const token = localStorage.getItem("id_token");
    // if (token) {
    //   setIsAuthenticated(true);
    // }
    // console.log(isAuthenticated, "checking auth state in App.jsx");
  }, []);

  const client = window.google.accounts.oauth2.initTokenClient({
    client_id:
      "248005865613-j5nc0j164et50emv7g18ap21l64bi07q.apps.googleusercontent.com",
    redirect_uri: "https://kgriffo.github.io/auth/",
    response_type: "token id_token",
    scope: "openid",
    callback: (tokenResponse) => {
      console.log("Token Response:", tokenResponse); // For debugging
      if (tokenResponse && tokenResponse.id_token) {
        localStorage.setItem("id_token", tokenResponse.id_token); // Store the token
        setIsAuthenticated(true);
      }
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
            <Route path="/protected" isAuthenticated={isAuthenticated}></Route>
            <Route path="/">
              <Redirect to="/public" />
            </Route>
          </Switch>
        </div>
      </Router>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Google OAuth Test</h1>
        <button onClick={() => client.requestAccessToken()}>Log in</button>
      </div>
    </>
  );
}

export { Auth, AuthProvider };

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
