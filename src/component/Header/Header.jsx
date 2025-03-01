import React from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import { useLanguage } from "../../context/LanguageContext";
import { Navbar, Nav, Container, Dropdown, Button, ButtonGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const { toggleLanguage } = useLanguage();

  return (
    <Navbar
      expand="lg"
      className={`py-3 shadow-sm position-sticky top-0 w-100 ${theme === "light" ? "bg-white" : "bg-dark text-white"}`}
      style={{ zIndex: 1000 }}
    >
      <Container>
        {/* Brand / Logo */}
        <Navbar.Brand className={`fw-bold ${theme === "light" ? "text-dark" : "text-light"}`}>
          <span className="text-primary">My</span>Shop
        </Navbar.Brand>

        {/* Navbar Toggle Button (For Mobile) */}
        <Navbar.Toggle aria-controls="navbar-nav" className="border-0" />

        {/* Navbar Links */}
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto gap-3">
            {["Home", "Contact", "Account", "Products", "Cart", "Login", "Register"].map((item) => (
              <NavLink
                key={item}
                to={`/${item.toLowerCase()}`}
                className={({ isActive }) =>
                  `fw-bold text-decoration-none px-3 py-2 rounded ${isActive ? "text-primary border-bottom border-2 border-primary" : "text-secondary"}`
                }
                style={{ transition: "0.3s ease-in-out" }}
              >
                {item}
              </NavLink>
            ))}
          </Nav>

          {/* Theme & Language Dropdown */}
          <div className="d-flex align-items-center gap-3 mt-3 mt-lg-0">
            <Dropdown as={ButtonGroup} align="end">
              <Dropdown.Toggle variant="white" className="text-secondary fw-bold">
                More
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item as={NavLink} to="/favorites">
                  Favorites
                </Dropdown.Item>
                <Dropdown.Item onClick={toggleTheme}>
                  {theme === "light" ? "Dark Mode" : "Light Mode"}
                </Dropdown.Item>
                <Dropdown.Item onClick={toggleLanguage}>Change Language</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
