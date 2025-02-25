import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchAllProducts } from "../slices/productsSlice";
import { addFavorite, removeFavorite } from "../slices/favoriteProductSlice";
import { addToCart } from "../slices/sliceCart";
import { Link } from "react-router-dom";
const Products = () => {
    const products = useSelector((state) => state.products.products);
    const favorites = useSelector((state) => state.favoriteProduct.favorites);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllProducts());
    }, [dispatch]);

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };

    const toggleFavorite = (product) => {
        const isFavorite = favorites.some((item) => item.id === product.id);
        if (isFavorite) {
            dispatch(removeFavorite(product.id));
        } else {
            dispatch(addFavorite(product));
        }
    };

    return (
        <div className="container my-5">
            <h2 className="text-center mb-4">Our Products</h2>
            <div className="row">
                {products.map((product) => {
                    const isFavorite = favorites.some((item) => item.id === product.id);

                    return (
                        <div key={product.id} className="col-md-4 mb-4">
                            <div className="card shadow-sm border-0 p-3 text-center" style={{ height: "100%" }}>
                                <Link to={`/products/${product.id}`} className="text-decoration-none text-dark">
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="card-img-top img-fluid"
                                        style={{ height: "250px", objectFit: "contain" }}
                                    />
                                </Link>
                                <div className="card-body p-0 mt-3">
                                    <h5 className="card-title">{product.title}</h5>
                                    <p className="card-text">${product.price}</p>
                                    <div className="d-flex justify-content-between">
                                        {/* Add to Cart Button */}
                                        <button className="btn btn-primary" onClick={() => handleAddToCart(product)}>
                                            Add to Cart
                                        </button>

                                        {/* Favorite Toggle Button */}
                                        <button
                                            className={`btn ${isFavorite ? "btn-danger" : "btn-outline-danger"}`}
                                            onClick={() => toggleFavorite(product)}
                                        >
                                            {isFavorite ? "❤️ Remove" : "🤍 Add Favorite"}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};



export default Products;