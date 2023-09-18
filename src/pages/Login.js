import React, { useState } from "react";
import { useNavigate } from "react-router-dom";



export const Login = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:5000/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, pass }),
            });

            if (response.ok) {
                // User authenticated successfully, navigate -> homepage
                navigate(`/home?success=Logged in successfully!`);
                // setShowAlert(true);
            } else {
                // Authentication failed, show -> error message
                setError("Invalid email or password.");
            }
        } catch (error) {
            console.error("Authentication error: ", error);
        }
    };

    return (
        <div className="auth-form-container container mt-5 col-5 ">
            <div className="card m-3">
                <div className="card-body">
                    <h2 className="text-center">Login</h2>
                    {error && <p className="text-danger">{error}</p>} {/* Display error message */}
                    <form className="login-form" onSubmit={handleSubmit}>
                        <label htmlFor="email">email</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" className="border border-dark" />
                        <label htmlFor="password">password</label>
                        <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" className="border border-dark" />
                        <button className="bg-secondary text-light mt-3 rounded h5" type="submit">LogIn</button>
                    </form>
                    <button className="link-btn" onClick={() => navigate('/register')}>Don't have an account? Register here.</button>


                </div>
            </div>
        </div>
    )
}

export default Login;
