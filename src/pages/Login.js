import React, { useState } from "react";
import "../styles/login.css";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setError(null);
        if (!email || !password) {
            setError("Please enter email and password");
            return;
        }
        const res = login(email, password);
        if (res.success) {
            navigate("/");
        } else {
            setError(res.message || "Login failed");
        }
    };

    return (
        <React.Fragment>
            <div className="login">
                <div className="header">
                    <p className="LAD">
                        <span> Chic </span> Lightings and Design
                    </p>
                </div>

                <div className="form">
                    <form onSubmit={handleSubmit}>
                        <p className="CA">Sign In</p>
                        <p className="JCLD">Welcome back — sign in to continue</p>

                        {error && <p style={{ color: "red" }}>{error}</p>}

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

                        <div className="from-group">
                            <label htmlFor="remember">
                                <input type="checkbox" id="remember" /> Remember me
                            </label>
                        </div>

                        <button type="submit" className="submit-button">
                            Sign In
                        </button>

                        <p className="or">Or sign in with</p>

                        <div className="GAF">
                            <button type="button" className="google">
                                Google
                            </button>
                            <button type="button" className="facebook">
                                Facebook
                            </button>
                        </div>

                        <p className="AC">
                            Don't have an account? <a href="/register"> Create one</a>
                        </p>
                    </form>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Login;