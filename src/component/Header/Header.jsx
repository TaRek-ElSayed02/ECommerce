import { NavLink } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import { useLanguage } from "../../context/LanguageContext";
import React from "react";
import { Dropdown, ButtonGroup, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const { toggleLanguage } = useLanguage();

  return (
    <header
      className={`py-3 px-4 d-flex align-items-center justify-content-between shadow-sm position-sticky top-0 w-100 ${theme === "light" ? "bg-white" : "bg-dark text-white"
        }`}
      style={{ zIndex: 1000 }}
    >
      {/* Logo */}
      <h3 className={`fw-bold m-0 ${theme === "light" ? "text-dark" : "text-light"}`}>
        <span className="text-primary">My</span>Shop
      </h3>

      {/* Navigation Links */}
      <nav className="d-flex gap-4">
        {["Home", "Contact", "Account", "Products", "Cart", "Login", "Register"].map((item) => (
          <NavLink
            key={item}
            to={`/${item.toLowerCase()}`}
            className={({ isActive }) =>
              `fw-bold text-decoration-none px-3 py-2 rounded ${isActive
                ? "text-primary border-bottom border-2 border-primary"
                : "text-secondary"
              }`
            }
            style={{ transition: "0.3s ease-in-out" }}
          >
            {item}
          </NavLink>
        ))}
      </nav>

      {/* Theme & Language Buttons */}
      <div className="d-flex gap-3">


        <div>
          <Dropdown as={ButtonGroup} drop="start">
            <Dropdown.Toggle variant="white" className="text-secondary fw-bold">More</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item >
                <button
                  className="btn"
                  style={{
                    transition: "0.3s ease-in-out",
                  }}
                >
                  <NavLink
                    to="/Favorites"
                   style={{textDecoration:"none",color:"black"}}
                    
                  >
                    Favorites
                  </NavLink>
                </button>
              </Dropdown.Item>
              <Dropdown.Item >
                <button
                  onClick={toggleTheme}
                  className="btn"
                  style={{
                    // backgroundColor: theme === "light" ? "#f8f9fa" : "#333",
                    color: theme === "light" ? "#333" : "black",
                    // border: "1px solid #ddd",
                    transition: "0.3s ease-in-out",
                  }}
                >
                  {theme === "light" ? "Dark" : "Light"}
                </button>
              </Dropdown.Item>
              <Dropdown.Item >
                <button
                  onClick={toggleLanguage}
                  className="btn"
                  style={{
                    // backgroundColor: theme === "light" ? "#f8f9fa" : "#333",
                    color: theme === "light" ? "#333" : "black",
                    // border: "1px solid #ddd",
                    transition: "0.3s ease-in-out",
                  }}
                >
                  Language
                </button>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

      </div>
    </header>
  );
};

export default Header;
