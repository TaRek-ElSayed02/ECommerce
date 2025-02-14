import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, increaseQuantity, decreaseQuantity } from "../slices/sliceCart";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.products);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleIncreaseQuantity = (id) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecreaseQuantity = (id) => {
    dispatch(decreaseQuantity(id));
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-center text-muted">Your cart is empty.</p>
      ) : (
        <>
          <div className="text-center mb-4">
            <h5>Total Quantity: {totalQuantity}</h5>
            <h5>Total Price: ${totalPrice.toFixed(2)}</h5>
          </div>
          <div className="row">
            {cartItems.map((item) => (
              <div key={item.id} className="col-md-4 mb-4">
                <div className="card p-3 shadow-sm text-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="card-img-top img-fluid"
                    style={{ height: "150px", objectFit: "contain" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="text-muted">${item.price}</p>
                    <div className="d-flex justify-content-center align-items-center mb-3">
                      <button
                        className="btn btn-secondary me-2"
                        onClick={() => handleDecreaseQuantity(item.id)}
                        disabled={item.quantity === 1}
                      >
                        -
                      </button>
                      <span className="mx-2">{item.quantity}</span>
                      <button
                        className="btn btn-secondary ms-2"
                        onClick={() => handleIncreaseQuantity(item.id)}
                      >
                        +
                      </button>
                    </div>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleRemoveFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
