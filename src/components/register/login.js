import React from "react";

function Login() {
  return (
    <div className="bg-color">
      <div className="reg-container">
        <div className="flex-container">
          <div className="reg-sign-up">
            <p>Sign Up</p>
            <div className="underline"></div>
            <form className="form">
              <label className="reg-label">First name*</label>
              <input />
              <label className="reg-label">Last name*</label>
              <input />
              <label className="reg-label">Phone Number*</label>
              <input type="number" />
              <label className="reg-label">Email*</label>
              <input type="email" />
              <label className="reg-label">Create password*</label>
              <input type="password" />
              <button>Sign up</button>
            </form>
          </div>
          <div className="partition"></div>
          <div className="reg-sign-In">
            <p className="signin-discrpt">or Sign Up via</p>
            <div className="fb">
              <img
                className="fb-icon"
                src="https://cdn.icon-icons.com/icons2/2890/PNG/512/apps_social_media_facebook_logo_social_network_media_online_icon_182716.png"
              />
              Facebook
            </div>
            <div className="google">
              <img
                className="G-icon"
                src="https://cdn-teams-slug.flaticon.com/google.jpg"
              />
              Google
            </div>
            <div>
              <p className="last-disc">
                by clicking submit you agree to <br /> the{" "}
                <u>Terms and Conditions</u>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
