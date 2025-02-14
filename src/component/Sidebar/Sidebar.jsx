import { useTheme } from "../../context/ThemeContext";

const Sidebar = () => {
    const { theme } = useTheme();
    return <aside className={`p-3 ${theme === "light" ? "bg-light" : "bg-secondary" }`}>Sidebar</aside>;
  };
  export default Sidebar;