import React from "react";
import '../css/product.css';

const Product = () => {
  return (
    <div className="product">
        <div className="product_info">
            <p>Tên sản phẩm</p>
            <p className="product_price">
                <strong>3.000.000 </strong>
                <small>VND</small>
            </p>
            <div className="product_rating">⭐⭐⭐</div>
        </div>
        <img src="http://placeimg.com/350/350/any" alt="product-img" />
        <button>Thêm vào giỏ hàng</button>
    </div>
  );
}

export default Product;