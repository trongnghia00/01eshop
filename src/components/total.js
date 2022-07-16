import React from "react";
import '../css/total.css';

const Total = () => {
    return(
        <div className="total">
            <p>Giỏ hàng có 3 món: <strong>3.000.000 VND</strong></p>
            <small className="total_gift">
                <input type="checkbox" />Chứa 1 món quà nhỏ
            </small>
            <button>Tiến hành thanh toán</button>
        </div>
    );
}

export default Total;