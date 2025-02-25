import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../slices/authSlice.js";
import { useNavigate } from "react-router-dom";

const Account = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  // Redirect if not logged in
  if (!user) {
    navigate("/login");
    return null;
  }

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className="d-flex justify-content-center vh-80 ">
      <div className="card p-4 shadow-lg rounded-4 text-center" style={{ width: "550px",marginTop:"170px" }}>
        <h2 className="fw-bold text-secondry">{user.username}</h2>
        <p className="text-muted mb-4">{user.email}</p>
        <button className="btn btn-outline-danger w-100 py-2" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Account;
