import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "./index.css";
import Auth from "./App.jsx";

const clientId =
  "248005865613-bh5ld74nm7tmnqjhji2994idde9deu6o.apps.googleusercontent.com";

createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId={clientId}>
    <StrictMode>
      <Auth />
    </StrictMode>
  </GoogleOAuthProvider>
);
