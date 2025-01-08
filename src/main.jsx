import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "./index.css";
import Auth from "./App.jsx";

const clientId =
  "248005865613-9qvvrcc519rvdfp444dfio0mvq14q43m.apps.googleusercontent.com"; // Replace with your Google OAuth Client ID

createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId={clientId}>
    <StrictMode>
      <Auth />
    </StrictMode>
  </GoogleOAuthProvider>
);
