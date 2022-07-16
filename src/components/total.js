import React from "react";
import '../css/total.css';
import { useDataValue } from "../utils/dataprovider";

const Total = () => {
    const [state, dispatch] = useDataValue();
    const getCartTotalPrice = (basket) => {
        return (basket?.reduce((amount, item)=> item.price + amount, 0));
    }

    return(
        <div className="total">
            <p>Giỏ hàng có {state.basket.length} món: <strong>{getCartTotalPrice(state.basket).toLocaleString('vi-VN')} VND</strong></p>
            <small className="total_gift">
                <input type="checkbox" />Chứa 1 món quà nhỏ
            </small>
            <button>Tiến hành thanh toán</button>
        </div>
    );
}

export default Total;