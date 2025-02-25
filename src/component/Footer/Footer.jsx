import { useTheme } from "../../context/ThemeContext";

const Footer = () => {
  const { theme } = useTheme();
  return (
    <footer
      className={`py-3 text-center shadow-sm ${
        theme === "light" ? "bg-secondary text-white" : "bg-black text-light"
      }`}
    >
      <p className="mb-1 fw-semibold">Tarek. All Rights Reserved © 2025</p>
    </footer>
  );
};

export default Footer;
