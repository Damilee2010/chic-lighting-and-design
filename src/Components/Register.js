// src/pages/Register.js
import React from "react";
import "../styles/register.css";

function Register() {
  return (
    <React.Fragment>
      <div className="register">
     
        <div className="header">
          <p className="LAD">
            <span>Chic</span> Lightings and Design
          </p>
        </div>

      
        <div className="form">
          <form>
            <p className="CA">Create Account</p>
            <p className="JCLD">Join Chic Lightings &amp; Design</p>

            <div className="form-group">
              <label htmlFor="fullname">Fullname</label>
              <input
                type="text"
                id="fullname"
                placeholder="Enter your full name"
              />
            </div>

           
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
              />
            </div>

          
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
              />
            </div>

           
            <div className="form-group">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input
                type="password"
                id="confirm-password"
                placeholder="Confirm your password"
              />
            </div>

          
            <p className="check">
              <input type="checkbox" id="terms" />
              <label htmlFor="terms">
                I agree to the{" "}
                <span className="ts">Terms of service</span> and{" "}
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