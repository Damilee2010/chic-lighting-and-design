// src/pages/Register.js
import React, { useState } from "react";
import "../styles/register.css";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

function Register() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);

  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);
    if (!fullname || !email || !password) {
      setError("Please fill all required fields");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    const res = register({ fullname, email, password });
    if (res.success) {
      // redirect to home after register
      navigate("/");
    } else {
      setError(res.message || "Registration failed");
    }
  };

  return (
    <React.Fragment>
      <div className="register">
        <div className="header">
          <p className="LAD">
            <span>Chic</span> Lightings and Design
          </p>
        </div>

        <div className="form">
          <form onSubmit={handleSubmit}>
            <p className="CA">Create Account</p>
            <p className="JCLD">Join Chic Lightings &amp; Design</p>

            {error && <p style={{ color: "red" }}>{error}</p>}

            <div className="form-group">
              <label htmlFor="fullname">Fullname</label>
              <input
                type="text"
                id="fullname"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                placeholder="Enter your full name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              />
            </div>

            <div className="form-group">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input
                type="password"
                id="confirm-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm your password"
              />
            </div>

            <p className="check">
              <input type="checkbox" id="terms" />
              <label htmlFor="terms">
                I agree to the <span className="ts">Terms of service</span> and{' '}
                <span className="ts">Privacy Policy</span>.
              </label>
            </p>

            <button type="submit" className="submit-button">
              Create Account
            </button>

            <p className="or">Or sign up with</p>

            <div className="GAF">
              <button type="button" className="google">
                Google
              </button>
              <button type="button" className="facebook">
                Facebook
              </button>
            </div>

            <p className="AC">
              Already have an account? <a href="/login">Sign in</a>
            </p>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Register;