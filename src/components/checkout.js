import React from "react";
import '../css/checkout.css';
import CheckoutProduct from "./co_product";
import Total from "./total";
import { useDataValue } from "../utils/dataprovider";

const Checkout = () => {
  const [state, dispatch] = useDataValue();
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img src="https://media.amway.my/sys-master/images/h6e/h5f/9288952283166/Category_Banner_Health_v2.jpg" alt="" className="checkout_ad" />
        <div>
          <h2 className="checkout_title">
            Giỏ hàng
          </h2>
          {state.basket.map(item => (
            <CheckoutProduct key={item.id}
              id = {item.id}
              title = {item.title}
              image = {item.image}
              price = {item.price}
              rating = {item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout_right">
        <Total />
      </div>
    </div>
  );
}

export default Checkout;