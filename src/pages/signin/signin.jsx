import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './sinin.css'
// Aos.js animation 
import AOS from 'aos';
import 'aos/dist/aos.css';

const SignIn = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((p) => ({ ...p, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const users = JSON.parse(localStorage.getItem("users") || "{}");

        if (!users[formData.email]) {
            setError("No account found with this email. Please register first.");
            return;
        }

        if (users[formData.email].password !== formData.password) {
            setError("Incorrect password.");
            return;
        }

        localStorage.setItem("loggedInUser", formData.email);
        setError("");
        navigate("/");
    };

    return (
        <div className="signin" >
            <div className="container ">
                <div className="heading">Sign In</div>
                <form className="form" onSubmit={handleSubmit}>
                    <input
                        required
                        className="input"
                        type="email"
                        name="email"
                        placeholder="E-mail"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <input
                        required
                        className="input"
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    <span className="forgot-password">
                        <a href="/forgot">Forgot Password ?</a>
                    </span>
                    <input className="login-button" type="submit" value="Sign In" />
                </form>
                {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
            </div>
        </div>

    );
};

export default SignIn;
