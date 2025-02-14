import React from "react";
import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../utils/axiosInstance";
import { FaStar, FaShoppingCart } from "react-icons/fa";

const fetchProductById = async (id) => {
  const { data } = await axiosInstance.get(`/products/${id}`);
  return data;
};

const ProductDetails = () => {
  const { id } = useParams(); 

  
  const {
    data: product,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProductById(id),
    enabled: !!id,
  });

  if (isLoading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-danger">Error fetching product</p>;

  return (
    <div className="container my-5">
      <div className="row align-items-center">
        {/* Product Image */}
        <div className="col-md-6 text-center">
          <img
            src={product.image}
            alt={product.title}
            className="img-fluid shadow-lg p-3 bg-white rounded"
            style={{ maxHeight: "400px", objectFit: "contain" }}
          />
        </div>

        {/* Product Details */}
        <div className="col-md-6">
          <h2 className="mb-3">{product.title}</h2>
          <p className="text-muted">{product.category.toUpperCase()}</p>
          <h4 className="text-success">${product.price}</h4>
          <p className="mt-3">{product.description}</p>

          {/* Ratings */}
          <div className="d-flex align-items-center">
            <span className="me-2">{product.rating.rate}</span>
            <FaStar className="text-warning" />
            <span className="ms-2 text-muted">({product.rating.count} reviews)</span>
          </div>

          {/* Buttons */}
          <div className="mt-4">
            <button className="btn btn-primary me-3">
              <FaShoppingCart className="me-2" />
              Add to Cart
            </button>
            <Link to="/products" className="btn btn-outline-secondary">Back to Products</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
