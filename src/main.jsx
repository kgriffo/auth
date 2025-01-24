import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { AuthProvider } from "./App.jsx";
import "./index.css";
import Auth from "./App.jsx";

const clientId =
  "248005865613-j5nc0j164et50emv7g18ap21l64bi07q.apps.googleusercontent.com";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <GoogleOAuthProvider clientId={clientId}>
      <StrictMode>
        <Auth />
      </StrictMode>
    </GoogleOAuthProvider>
  </AuthProvider>
);
