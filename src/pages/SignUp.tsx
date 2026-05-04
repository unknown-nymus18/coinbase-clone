import React, { useState } from "react";
import { Icon } from "@coinbase/cds-web/icons/Icon";
import "../styles/signin.css";
import { LogoMark } from "@coinbase/cds-web/icons";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Api from "../services/api";

function SignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSignUp = () => {
    Api.signUp(name, email, password)
      .then((response) => {
        console.log(response);
        navigate("/");
      })
      .catch((error) => {
        console.error("Error signing up:", error);
      });
  };

  return (
    <div className="signin-page">
      <div className="coinbase-logo">
        <Link to={"/"}>
          <LogoMark foreground={false}></LogoMark>
        </Link>
      </div>
      <div className="signin-container">
        <div className="signin-form">
          <h1>Create your account</h1>
          <p className="privacy-text">
            Access all that Coinbase has to offer with a single account.
          </p>

          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="email-input"
            />
            <div style={{ height: 10 }}></div>

            <label htmlFor="email">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="email-input"
            />
            <div style={{ height: 10 }}></div>

            <label htmlFor="password">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Your password"
              className="email-input"
            />
          </div>

          <button className="continue-btn" onClick={handleSignUp}>
            Continue
          </button>

          <div className="divider">
            <span>OR</span>
          </div>

          <div className="social-buttons">
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

export default SignUp;
