import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import "./App.css";
//Firebase (domain restriction)
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "",
  authDomain: "winged-zodiac-447218-v1.firebaseapp.com",
  projectId: "winged-zodiac-447218-v1",
  storageBucket: "winged-zodiac-447218-v1.firebasestorage.app",
  messagingSenderId: "248005865613",
  appId: "1:248005865613:web:06f60deca71a522b1f72c4",
  measurementId: "G-5XTNV6X59L",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function Auth() {
  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      if (tokenResponse.authuser == "1") {
        console.log(tokenResponse);
        const userInfo = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          { headers: { Authorization: `Bearer ${tokenResponse.access_token}` } }
        );

        console.log(userInfo);
        alert("Login successful!");
      } else {
        console.log("Unauthorized user; login failed.");
        // Timeout needed to ensure Google login pop-up closes before alert appears
        setTimeout(() => {
          alert("Unauthorized user; login failed.");
        }, 100);
      }
      console.log(analytics);
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
