import { Button } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";
import { auth, provider } from "./firebase";
import "./Login.css";

function Login() {
  const dispatch = useDispatch();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
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
  const signInAnonymously = () => {
    auth.signInAnonymously();
  };
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://centaur-wp.s3.eu-central-1.amazonaws.com/designweek/prod/content/uploads/2020/10/07113122/gmail-1.jpg"
          alt=""
        />
        <Button variant="contained" color="primary" onClick={signIn}>
          Sign in with Google
        </Button>
        <Button variant="contained" color="primary" onClick={signInAnonymously}>
          Login Anonymously
        </Button>
      </div>
    </div>
  );
}

export default Login;
