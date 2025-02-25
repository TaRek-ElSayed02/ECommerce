import React, { useState, useEffect } from "react";
import "./LoginForm.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchLogin } from "../../slices/authSlice.js";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user, loginError } = useSelector((state) => state.auth); 

    // Redirect to /account when logged in
    useEffect(() => {
        if (user) {
            navigate("/account");
        }
    }, [user, navigate]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setSuccessMessage("");

        let validationErrors = {};
        if (email.length < 4) validationErrors.email = "At least 4 characters long";
        if (password.length < 6) validationErrors.password = "At least 6 characters long";

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        try {
            await dispatch(fetchLogin({ email, password })).unwrap();
            setSuccessMessage("Logged in successfully!");
            setErrors({ api: "" });
        } catch (error) {
            setErrors({ api: error.message || "Login failed" });
        }
    };

    return (
        <div className="class-container">
            <Header />
        <div className="form-container" style={{ marginBlock:"70px",width:"33%"}}>
            <p className="title">Welcome back</p>
            <form onSubmit={handleSubmit} className="form">
              <label htmlFor="inputEmail" className="form-label" style={{margin:"0" ,marginLeft:"5px"}}>Email</label>

                <input
                    type="email"
                    className="input"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && <p className="error text-danger">{errors.email}</p>}

              <label htmlFor="inputPassword" className="form-label" style={{margin:"0" ,marginLeft:"5px"}}>Password</label>

                <input
                    type="password"
                    className="input"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {errors.password && <p className="error text-danger">{errors.password}</p>}

                {successMessage && <p className="text-success">{successMessage}</p>}
                {errors.api && <p className="error text-danger">{errors.api}</p>}
                {loginError && <p className="error text-danger">{loginError}</p>}

                <p className="page-link">
                    <span className="page-link-label">Forgot Password?</span>
                </p>
                <button className="form-btn" >Log in</button>
            </form>

            <p className="sign-up-label">
                Don't have an account?{" "}
                <span className="sign-up-link" onClick={() => navigate("/register")}>
                    Sign up
                </span>
            </p>
        </div>
        <Footer />
        </div>
    );
};

export default LoginForm;
