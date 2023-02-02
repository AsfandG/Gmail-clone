import { Button } from "@mui/material";
import React from "react";
import "./login.css";
import { auth, provider } from "../../firebase";
import { useDispatch } from "react-redux";
import { signInWithPopup } from "firebase/auth";
import { login } from "../../features/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const signIn = () => {
    signInWithPopup(auth, provider)
      .then(({ user }) => {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        );
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login_container">
        <div className="logo">
          <img
            src="https://freepngimg.com/thumb/gmail/66569-suite-google-contacts-email-gmail-png-file-hd.png"
            alt="logo"
          />
          <h1>Gmail</h1>
        </div>
        <Button variant="contained" size="small" onClick={signIn}>
          Login
        </Button>
      </div>
    </div>
  );
};

export default Login;
