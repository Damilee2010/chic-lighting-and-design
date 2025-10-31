import React from "react";
import "../styles/login.css";

function Main(){
    return(
        <React.Fragment>
           <div className="login">
            <div className="header">
                    <p className="LAD"> <span> Chic </span> Lightings and Design</p>
                    
            </div>

            <div className="form">
                    <form>
                        <p className="CA">Create Account</p>
                    <p className="JCLD">Join Chic Lightings & Design</p>
                    
                    <div className="form-group">
                        <label for="fullname">Fullname</label>
                        <input type="text" id="fullname" placeholder="Enter your full name"/>
                    </div>

                    <div className="form-group">
                        <label for="email">Email Address</label>
                        <input type="email" id="email" placeholder="Enter your email"/>
                    </div>

                    <div className="from-group">
                        <label for="password">Password</label>
                        <input type="password" id="password" placeholder="Enter your password"/>
                    </div>
                
                    <div className="from-group">
                        <label for="confrim-password">Confirm Password</label>
                        <input type="password" id="confrim-password" placeholder="Confrim your password"/>
                    </div>

                       <p className="check"><input type="checkbox"/><p> I agree to the <span className="ts">Terms of service </span> and  <span className="ts">Privacy Policy</span>.</p></p>

                <button type="sumit" className="sumit-button">Create Account</button>

                <p className="or">Or sign up with</p>

                <div className="GAF">
                    <button className="google">Google</button>
                    <button className="facebook">Facebook</button>
                </div>

                <p className="AC">Already have an account? <a href="#"> Sign up</a> </p>
                </form>

                </div>
            </div>
           
        </React.Fragment>
    )
}



export default Main