import React from "react";
import { Icon } from "@coinbase/cds-web/icons/Icon";
import "../styles/signin.css";
import { LogoMark } from "@coinbase/cds-web/icons";

function SignIn() {
  return (
    <div className="signin-page">
      <div className="coinbase-logo">
        <LogoMark foreground={false}></LogoMark>
      </div>
      <div className="signin-container">
        <div className="signin-form">
          <h1>Sign in to Coinbase</h1>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Your email address"
              className="email-input"
            />
          </div>

          <button className="continue-btn">Continue</button>

          <div className="divider">
            <span>OR</span>
          </div>

          <div className="social-buttons">
            <button className="social-btn passkey-btn">
              <Icon name="key" size="s" />
              Sign in with Passkey
            </button>

            <button className="social-btn google-btn">
              <Icon name="googleLogo" size="s" />
              Sign in with Google
            </button>

            <button className="social-btn apple-btn">
              <Icon name="apple" size="s" />
              Sign in with Apple
            </button>
          </div>

          <div className="signup-link">
            Don't have an account? <a href="/signup">Sign up</a>
          </div>

          <div className="privacy-text">
            Not your device? Use a private window. See our Privacy Policy for
            more info.
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
