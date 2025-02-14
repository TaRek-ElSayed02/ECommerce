import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";

const Layout = () => (
    <div className="d-flex flex-column vh-100">
      <Header />
      <div className="d-flex flex-grow-1">
        <Sidebar />
        <main className="flex-grow-1 p-3">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
  export default Layout;