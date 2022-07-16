import React from "react";
import '../css/checkout.css';
import CheckoutProduct from "./co_product";


const Checkout = () => {
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img src="https://media.amway.my/sys-master/images/h6e/h5f/9288952283166/Category_Banner_Health_v2.jpg" alt="" className="checkout_ad" />
        <div>
          <h2 className="checkout_title">
            Giỏ hàng
          </h2>
          <CheckoutProduct />
          <CheckoutProduct />
          <CheckoutProduct />
        </div>
      </div>
      <div className="checkout_right">
        Total
      </div>
    </div>
  );
}

export default Checkout;