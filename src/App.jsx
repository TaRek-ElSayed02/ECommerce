import { Routes, Route } from "react-router-dom";
import Layout from "./component/Layout/Layout.jsx";
import Home from "../src/pages/Home.jsx";
// import Products from "./pages/Products.jsx";
import Contact from "./pages/Contacts.jsx";
import Account from "./pages/Account.jsx";
import Cart from "./pages/Cart.jsx";
import NotFound from "./pages/NotFound.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import { Provider } from "react-redux";
import Products from "./pages/Products.jsx";
import Login from "./pages/Login.jsx";
import RegistrationForm from "./component/Forms/RegisterForm.jsx";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchLoggedInUser } from "./slices/authSlice.js";
import { Navigate } from "react-router-dom";
import {ProtectedRoute} from "./component/Forms/ProtectedRoute.jsx";
import Favorites from "./pages/Favorites.jsx";


const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLoggedInUser());
  }, [dispatch]);

  // import { Routes, Route, Navigate } from "react-router-dom";
  return (

    <Routes>
      {/* Public Routes */}
      <Route path="login" element={<Login />} />
      <Route path="register" element={<RegistrationForm />} />

      {/* Protected Routes */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="home" />} />

        <Route 
          path="home" 
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="products" 
          element={
            <ProtectedRoute>
              <Products />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="products/:id" 
          element={
            <ProtectedRoute>
              <ProductDetails />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="contact" 
          element={
            <ProtectedRoute>
              <Contact />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="account" 
          element={
            <ProtectedRoute>
              <Account />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="cart" 
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="favorites" 
          element={
            <ProtectedRoute>
              <Favorites />
            </ProtectedRoute>
          } 
        />
        
        {/* Not Found Page */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
export default App;