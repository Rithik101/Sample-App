
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [nameError, setNameError] = useState("");
    const navigate = useNavigate();

    const validateEmail = () => {
        if (!email) {
            setEmailError("Email is required.");
        } else if (!isValidEmail(email)) {
            setEmailError("Invalid email format.");
        } else {
            setEmailError("");
        }
    };

    const validatePassword = () => {
        if (!password) {
            setPasswordError("Password is required.");
        } else if (password.length < 6) {
            setPasswordError("Password must be at least 6 characters.");
        } else {
            setPasswordError("");
        }
    };

    const validateName = () => {
        if (!name) {
            setNameError("Name is required.");
        } else {
            setNameError("");
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        validateEmail();
        validatePassword();
        validateName();

        if (!emailError && !passwordError && !nameError) {
            try {
                const response = await fetch("http://localhost:5000/users", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ name, email, password }),
                });

                if (response.ok) {
                    navigate("/login");
                } else {
                    console.error("Registration failed");
                }
            } catch (error) {
                console.error("Registration error: ", error);
            }
        }
    };

    const isValidEmail = (email) => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return emailRegex.test(email);
    };

    return (
        <div className="auth-form-container container col-5 mt-5">
            <div className="card m-3">
                <div className="card-body">
                    <h2 className="text-center">Register</h2>
                    <form className="register-form" onSubmit={handleSubmit}>
                        <label htmlFor="name">Full name</label>
                        <input
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                                validateName();
                            }}
                            id="name"
                            placeholder="Full Name"
                            className="border border-dark"
                        />
                        {nameError && <div className="error-message">{nameError}</div>}

                        <label htmlFor="email">Email</label>
                        <input
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                validateEmail();
                            }}
                            type="email"
                            placeholder="youremail@gmail.com"
                            id="email"
                            className="border border-dark"
                        />
                        {emailError && <div className="error-message">{emailError}</div>}

                        <label htmlFor="password">Password</label>
                        <input
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                                validatePassword();
                            }}
                            type="password"
                            placeholder="********"
                            id="password"
                            className="border border-dark"
                        />
                        {passwordError && <div className="error-message">{passwordError}</div>}

                        <button
                            type="submit" className="btn btn-secondary mt-3"
                        // disabled={!!emailError || !!passwordError || !!nameError}
                        >
                            Sign Up
                        </button>
                    </form>
                    <button className="link-btn " onClick={() => navigate(" /login")}>
                        Already have an account? Login here.
                    </button>
                </div>
            </div>
        </div >
    );
};

export default Register;
