import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../slices/authSlice.js";
import { useNavigate } from "react-router-dom";
import "../styles/Account.css";
//it should be right  s

const Account = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  // Redirect if not logged in
  if (!user) {
    navigate("/login");
    return null;
  }

  /*this is anything*/ 
  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className="account-container">
      <div className="account-card">
        <h2 className="username">{user.username}</h2>
        <p className="email">{user.email}</p>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Account;
