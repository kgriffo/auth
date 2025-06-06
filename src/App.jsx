/* eslint-disable react/prop-types */
import "./App.css";
import "./Protected.jsx";
import { useEffect, useContext, createContext, useState, useRef } from "react";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";

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
  const navigate = useNavigate();
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
        console.log(tokenResponse.id_token);
        if (tokenResponse) {
          //&& tokenResponse.id_token
          console.log(tokenResponse.id_token);
          localStorage.setItem("id_token", tokenResponse.id_token);
          setIsAuthenticated(true);
          navigate("/protected");
        }
      },
    });
  }, [navigate, setIsAuthenticated]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        width: "100%",
        textAlign: "center",
        gap: 3,
      }}
    >
      <Routes>
        <Route
          path="/public"
          element={
            !isAuthenticated ? (
              <Typography>Public Page</Typography>
            ) : (
              <Navigate to="/protected" />
            )
          }
        />
        <Route
          path="/protected"
          element={<Typography>Protected Page</Typography>}
        />
        <Route path="*" element={<Navigate to="/public" />} />
      </Routes>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <Typography>Google OAuth Test</Typography>
        <Button
          variant="outlined"
          onClick={() => clientRef.current?.requestAccessToken()}
        >
          Log in
        </Button>
        <Button
          variant="outlined"
          onClick={() => {
            localStorage.removeItem("id_token");
            setIsAuthenticated(false);
            navigate("/public");
          }}
        >
          Log out
        </Button>
      </div>
    </Box>
  );
}

export default Auth;
