import React from "react";
import '../css/co_product.css';
import  { useDataValue } from '../utils/dataprovider';

const CheckoutProduct = (props) => {
  const [state, dispatch] = useDataValue();

  const removeFromCart = () => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      id: props.id
    });
  }
  return (
    <div className="cop">
      <img src={props.image} alt="" className="cop_image" />

      <div className="cop_info">
        <p className="cop_title">{props.title}</p>
        <p className="cop_price">
            <strong>{props.price.toLocaleString('vi-VN')} </strong>
            <small>VND</small>
        </p>
        <div className="cop_rating">
        {Array(props.rating)
          .fill()
          .map((_, i) => (
              <p key={i}>⭐</p>
          ))
        }
        </div>
        <button onClick={removeFromCart}>Xóa khỏi giỏ hàng</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;