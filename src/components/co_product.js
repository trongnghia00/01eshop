import React from "react";
import '../css/co_product.css';

const CheckoutProduct = () => {
  return (
    <div className="cop">
      <img src="https://media.amway.com.vn/sys-master/images/hec/hc5/9028465164318/nu_120571_1_Probiotic_Product_588Wx588H" alt="" className="cop_image" />

      <div className="cop_info">
        <p className="cop_title">TP BVSK Nutrilite Probiotic</p>
        <p className="cop_price">
            <strong>1.010.000 </strong>
            <small>VND</small>
        </p>
        <div className="cop_rating">⭐⭐⭐⭐</div>
        <button>Xóa khỏi giỏ hàng</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;