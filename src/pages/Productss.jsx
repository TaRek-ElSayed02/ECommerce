// import { useQuery } from "@tanstack/react-query";
// import { Link } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { addToCart } from "../slices/sliceCart";
// import axiosInstance from "../utils/axiosInstance";

// import Spinner from 'react-bootstrap/Spinner';

// const fetchProducts = async () => {
//   const { data } = await axiosInstance.get("/products");
//   return data;
// };

// const Products = () => {
//   const dispatch = useDispatch();
//   const { data: products,
//      isLoading,
//       error 
//     } = useQuery({
//     queryKey: ["products"],
//     queryFn: fetchProducts,
//   });

//   const handleAddToCart = (product) => {
//     dispatch(addToCart(product));
//   };

//   if (isLoading) return <p className="text-center"> <Spinner animation="border" variant="secondary" /></p>;
//   if (error) return <p className="text-center text-danger">Error fetching products</p>;

//   return (
//     <div className="container my-5">
//       <h2 className="text-center mb-4">Our Products</h2>
//       <div className="row">
//         {products.map((product) => (
//           <div key={product.id} className="col-md-4 mb-4">
//             <div className="card shadow-sm border-0 p-3 text-center" style={{ height: "100%" }}>
            //   <Link to={`/products/${product.id}`} className="text-decoration-none text-dark">
            //     <img
            //       src={product.image}
            //       alt={product.title}
            //       className="card-img-top img-fluid"
            //       style={{ height: "250px", objectFit: "contain" }}
            //     />
            //   </Link>
//               <div className="card-body d-flex flex-column">
//                 <h5 className="card-title flex-grow-1">{product.title}</h5>
//                 <p className="text-muted">${product.price}</p>
//                 <button className="btn btn-primary mt-auto" onClick={() => handleAddToCart(product)}>
//                   Buy Now
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Products;
