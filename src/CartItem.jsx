import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { removeItem, updateQuantity } from "./CartSlice";
import "./CartItem.css";

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const calculateTotalAmount = () => {
    let total = 0;

    cart.forEach((item) => {
      const cost = parseFloat(item.cost);

      total += cost * item.quantity;
    });

    return total.toFixed(2);
  };

  const handleContinueShopping = (e) => {
    e.preventDefault();
    onContinueShopping();
  };

  const handleCheckoutShopping = (e) => {
    alert("Functionality to be added for future reference");
  };

  const handleIncrement = (item) => {
    dispatch(
      updateQuantity({
        name: item.name,
        quantity: item.quantity + 1,
      }),
    );
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(
        updateQuantity({
          name: item.name,
          quantity: item.quantity - 1,
        }),
      );
    } else if (item.quantity === 1) {
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  const calculateTotalCost = (item) => {
    const unitCost = parseFloat(item.cost);

    const subtotal = unitCost * item.quantity;
    return subtotal.toFixed(2);
  };

  if (cart.length === 0) {
    return (
      <div className="cart-container cart-empty">
        <h2 style={{ color: "black" }}>Your Shopping Cart is Empty!</h2>
        <div className="continue_shopping_btn" style={{ marginTop: "20px" }}>
          <button
            className="get-started-button"
            onClick={handleContinueShopping}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2 style={{ color: "black" }}>
        Total Cart Amount: ${calculateTotalAmount()}
      </h2>
      <div>
        {cart.map((item) => (
          <div className="cart-item" key={item.name}>
            <img className="cart-item-image" src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              {/* Display Unit Cost */}
              <div className="cart-item-cost">
                Unit Cost: ${parseFloat(item.cost).toFixed(2)}
              </div>

              <div className="cart-item-quantity">
                {/* Decrement Button */}
                <button
                  className="cart-item-button cart-item-button-dec"
                  onClick={() => handleDecrement(item)}
                >
                  -
                </button>

                {/* Quantity Value */}
                <span className="cart-item-quantity-value">
                  {item.quantity}
                </span>

                {/* Increment Button */}
                <button
                  className="cart-item-button cart-item-button-inc"
                  onClick={() => handleIncrement(item)}
                >
                  +
                </button>
              </div>

              {/* Item Subtotal */}
              <div className="cart-item-total">
                Total: ${calculateTotalCost(item)}
              </div>

              {/* Delete Button */}
              <button
                className="cart-item-delete"
                onClick={() => handleRemove(item)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      <div
        style={{ marginTop: "20px", color: "black" }}
        className="total_cart_amount"
      >
        {/* Grand Total Display */}
        <h3>Grand Total: ${calculateTotalAmount()}</h3>
      </div>

      <div className="continue_shopping_btn">
        {/* Continue Shopping Button */}
        <button className="get-started-button" onClick={handleContinueShopping}>
          Continue Shopping
        </button>
        <br />
        {/* Checkout Button */}
        <button
          className="get-started-button1"
          onClick={handleCheckoutShopping}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartItem;
