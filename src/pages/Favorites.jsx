import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFavorite } from "../slices/favoriteProductSlice";
import { Link } from "react-router-dom";

import { addToCart } from "../slices/sliceCart";

const Favorites = () => {
    const favorites = useSelector((state) => state.favoriteProduct.favorites);
    const dispatch = useDispatch();

    const handleRemoveFavorite = (productId) => {
        dispatch(removeFavorite(productId));
    };

     const handleAddToCart = (product) => {
            dispatch(addToCart(product));
        };

    return (
        <div className="container my-5">
            <h2 className="text-center mb-4">My Favorite Products</h2>
            {favorites.length === 0 ? (
                <p className="text-center">No favorite products yet. <Link to="/products">Browse Products</Link></p>
            ) : (
                <div className="row">
                    {favorites.map((product) => (
                        <div key={product.id} className="col-md-4 mb-4">
                            <div className="card shadow-sm border-0 p-3 text-center">
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
                                    <div className="d-grid gap-2 mt-3">
                                        
                                        <button
                                            className="btn btn-primary"
                                            onClick={() => handleAddToCart(product)}
                                        >
                                            Add to Cart
                                        </button>
                                        <button
                                            className="btn btn-danger"
                                            onClick={() => handleRemoveFavorite(product.id)}
                                        >
                                            Remove from Favorites
                                        </button>

                                       
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Favorites;
