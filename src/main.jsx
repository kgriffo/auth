import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "./index.css";
import Auth from "./App.jsx";

const clientId = "YOUR_GOOGLE_CLIENT_ID"; // Replace with your Google OAuth Client ID

createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId={clientId}>
    <StrictMode>
      <Auth />
    </StrictMode>
  </GoogleOAuthProvider>
);
