import { Routes, Route } from "react-router-dom";
import Layout from "./component/Layout/Layout.jsx";
import Home from "../src/pages/Home.jsx";
import Products from "./pages/Products.jsx";
import Contact from "./pages/Contacts.jsx";
import Account from "./pages/Account.jsx";
import Cart from "./pages/Cart.jsx";
import NotFound from "./pages/NotFound.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import { Provider } from "react-redux";

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="products" element={<Products />} />
      <Route path="products/:id" element={<ProductDetails />} />
      <Route path="contact" element={<Contact />} />
      <Route path="account" element={<Account />} />
      <Route path="cart" element={<Cart />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
);
export default App;