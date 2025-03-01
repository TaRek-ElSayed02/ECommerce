import React, { useState } from "react";
import styles from "./form.module.css";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { fetchRegister } from "../../slices/authSlice.js";
import Footer from "../Footer/Footer.jsx";
import Header from "../Header/Header.jsx";
import { Toast, ToastContainer } from "react-bootstrap";

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const { registerError } = useSelector((state) => state.auth);
  const [successMessage, setSuccessMessage] = useState("");

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const result = await dispatch(fetchRegister(data)).unwrap();
      console.log("Registration result:", result);
      setSuccessMessage("Registration successful! You can now log in.");
      reset();
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <div>
      <Header />
      <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "82vh" }}>
        <div className="card p-4 shadow-lg" style={{ width: "100%", maxWidth: "500px" }}>
          <h2 className="text-center mb-4">Sign Up</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label htmlFor="inputEmail" className="form-label">Email</label>
              <input
                type="email"
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                id="inputEmail"
                placeholder="Enter your email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/,
                    message: "Invalid email format",
                  },
                })}
              />
              {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
            </div>

            <div className="mb-3">
              <label htmlFor="inputUsername" className="form-label">Username</label>
              <input
                type="text"
                className={`form-control ${errors.username ? "is-invalid" : ""}`}
                id="inputUsername"
                placeholder="Enter your username"
                {...register("username", {
                  required: "Username is required",
                  minLength: { value: 5, message: "Must be at least 5 characters" },
                })}
              />
              {errors.username && <div className="invalid-feedback">{errors.username.message}</div>}
            </div>

            <div className="mb-3">
              <label htmlFor="inputPassword" className="form-label">Password</label>
              <input
                type="password"
                className={`form-control ${errors.password ? "is-invalid" : ""}`}
                id="inputPassword"
                {...register("password", {
                  required: "Password is required",
                  minLength: { value: 6, message: "Must be at least 6 characters" },
                })}
              />
              {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
            </div>

            {registerError && <div className="alert alert-danger">{registerError}</div>}

            <button type="submit" className="btn btn-primary w-100">Sign Up</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RegistrationForm;
