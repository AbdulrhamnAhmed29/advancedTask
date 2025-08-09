import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './register.css'
// Aos.js animation 
import AOS from 'aos';
import 'aos/dist/aos.css';

const Register = () => {

    // animation 
    useEffect(() => {
        AOS.init({ duration: 2500 });
    }, []);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({ email: "", password: "" });
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(p => ({ ...p, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const users = JSON.parse(localStorage.getItem("users") || "{}");

        if (users[formData.email]) {
            setMessage("This email is already registered. Please sign in.");
            return;
        }

        users[formData.email] = { password: formData.password };
        localStorage.setItem("users", JSON.stringify(users));

        localStorage.setItem("loggedInUser", formData.email);

        setMessage("Account created successfully! Redirecting to dashboard...");

        setTimeout(() => {
            navigate("/signin");
        }, 2000);
    };

    return (
        <div className="register" data-aos="fade-up">
            <div className="container">
                <form className="form-register" onSubmit={handleSubmit}>
                    <div className="heading"><span>Register</span></div>

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
                    <input className="login-button" type="submit" value="Create Account" />
                </form>

                {message && (
                    <p style={{ color: message.includes("successfully") ? "green" : "red", textAlign: "center" }}>
                        {message}
                    </p>
                )}
            </div>
        </div>
    );
};

export default Register;
