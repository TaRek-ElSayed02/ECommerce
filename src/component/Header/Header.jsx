import { NavLink } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import { useLanguage } from "../../context/LanguageContext";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const { toggleLanguage } = useLanguage();

  return (
    <header
      className={`py-3 px-4 d-flex align-items-center justify-content-between shadow-sm ${
        theme === "light" ? "bg-white" : "bg-dark text-white"
      }`}
    >
      {/* Navigation Links */}
      <nav className="d-flex gap-4">
        {["Home", "Products", "Contact", "Account", "Cart"].map((item) => (
          <NavLink
            key={item}
            to={`/${item.toLowerCase()}`}
            className={({ isActive }) =>
              `fw-bold text-decoration-none px-3 py-2 rounded ${
                isActive ? "text-primary border-bottom border-primary" : "text-secondary"
              }`
            }
          >
            {item}
          </NavLink>
        ))}
      </nav>

      {/* Theme & Language Buttons */}
      <div className="d-flex gap-3">
        <button
          onClick={toggleTheme}
          className="btn btn-outline-primary fw-bold px-4 py-2 rounded-pill shadow-sm"
        >
          {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </button>
        <button
          onClick={toggleLanguage}
          className="btn btn-outline-secondary fw-bold px-4 py-2 rounded-pill shadow-sm"
        >
          🌍 Change Language
        </button>
      </div>
    </header>
  );
};

export default Header;
