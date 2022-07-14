import React from "react";
import '../css/product.css';

const Product = (props) => {
  return (
    <div className="product">
        <div className="product_info">
            <p>{props.title}</p>
            <p className="product_price">
                <strong>{props.price.toLocaleString('vi-VN')} </strong>
                <small>VND</small>
            </p>
            <div className="product_rating">
                {Array(props.rating)
                .fill()
                .map((_, i) => (
                    <p key={i}>⭐</p>
                ))
                }
            </div>
        </div>
        <img src={props.image} alt="product-img" />
        <button>Thêm vào giỏ hàng</button>
    </div>
  );
}

export default Product;