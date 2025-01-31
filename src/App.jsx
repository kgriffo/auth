/* eslint-disable react/prop-types */
import "./App.css";
import { useEffect, useContext, createContext, useState, useRef } from "react";
import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  console.log("fired auth provider");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("id_token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);
  console.log(isAuthenticated, "checking auth state in App.jsx");

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

const UseAuth = () => {
  console.log("fired use auth");
  return useContext(AuthContext);
};

function Auth() {
  const { isAuthenticated, setIsAuthenticated } = UseAuth();
  const clientRef = useRef(null);
  useEffect(() => {
    const token = localStorage.getItem("id_token");
    if (token) {
      setIsAuthenticated(true);
    }
    console.log(isAuthenticated, "checking auth state in App.jsx");
  }, [isAuthenticated, setIsAuthenticated]);

  useEffect(() => {
    clientRef.current = window.google.accounts.oauth2.initTokenClient({
      client_id:
        "248005865613-j5nc0j164et50emv7g18ap21l64bi07q.apps.googleusercontent.com",
      redirect_uri: "https://kgriffo.github.io/auth/",
      response_type: "token id_token",
      scope: "openid",
      callback: (tokenResponse) => {
        console.log("Token Response:", tokenResponse);
        if (tokenResponse && tokenResponse.id_token) {
          localStorage.setItem("id_token", tokenResponse.id_token);
          setIsAuthenticated(true);
        }
      },
    });
  }, [setIsAuthenticated]);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/public" element={<h1>Public Page</h1>}></Route>
          <Route
            path="/protected"
            element={
              isAuthenticated ? (
                <h1>Protected Page</h1>
              ) : (
                <Navigate to="/public" />
              )
            }
          />
          <Route path="*" element={<Navigate to="/public" />} />
        </Routes>
      </Router>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Google OAuth Test</h1>
        <button onClick={() => clientRef.current?.requestAccessToken()}>
          Log in
        </button>
      </div>
    </>
  );
}

export default Auth;
