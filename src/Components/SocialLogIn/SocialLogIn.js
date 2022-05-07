import React from "react";
import googleIcon from "../socialLogInImages/Google.png";
import facebookIcon from "../socialLogInImages/facebook.png";
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init";

const SocialLogIn = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  return (
    <div>
      <button onClick={() => signInWithGoogle()} className="btn btn-outline-primary w-100 my-2">
        <img src={googleIcon} alt="" />
        <span className="ms-2">Google</span>
      </button>
      <button className="btn btn-outline-primary w-100">
        <img src={facebookIcon} alt="" />
        <span className="ms-2">Facebook</span>
      </button>
    </div>
  );
};

export default SocialLogIn;
