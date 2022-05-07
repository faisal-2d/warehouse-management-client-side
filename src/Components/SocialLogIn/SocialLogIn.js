import React from "react";
import googleIcon from "../socialLogInImages/Google.png";
import facebookIcon from "../socialLogInImages/facebook.png";

const SocialLogIn = () => {
  return (
    <div>
      <button className="btn btn-outline-primary w-100 my-2">
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
