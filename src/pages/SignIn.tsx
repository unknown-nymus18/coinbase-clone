import React, { useState } from "react";
import { Icon } from "@coinbase/cds-web/icons/Icon";
import "../styles/signin.css";
import { LogoMark } from "@coinbase/cds-web/icons";
import { Link, useNavigate } from "react-router-dom";
import Api from "../services/api";

function SignIn() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function continueClickHandler() {
    if (!showPassword && email) {
      setShowPassword(true);
    } else if (showPassword) {
      setError("");
      Api.login(email, password)
        .then((response) => {
          console.log("Login successful:", response);
          navigate("/");
        })
        .catch((err) => {
          console.error("Login failed:", err);
          setError("Invalid email or password. Please try again.");
        });
    }
  }

  return (
    <div className="signin-page">
      <div className="coinbase-logo">
        <Link to={"/"}>
          <LogoMark foreground={false}></LogoMark>
        </Link>
      </div>
      <div className="signin-container">
        <div className="signin-form">
          <h1>Sign in to Coinbase</h1>
          {error && (
            <div
              className="error-message"
              style={{ color: "red", marginBottom: "10px" }}
            >
              {error}
            </div>
          )}

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Your email address"
              className="email-input"
              disabled={showPassword}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            {showPassword && (
              <>
                <div style={{ height: 20 }}></div>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Your password"
                  className="email-input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </>
            )}
          </div>

          <button className="continue-btn" onClick={continueClickHandler}>
            Continue
          </button>

          {!showPassword ? (
            <>
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
                Not your device? Use a private window. See our Privacy Policy
                for more info.
              </div>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default SignIn;
