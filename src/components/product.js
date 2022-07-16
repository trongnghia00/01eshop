import React from "react";
import '../css/product.css';
import { useDataValue } from "../utils/dataprovider";

const Product = (props) => {
    const [state, dispatch] = useDataValue();

    const addToCart = () => {
        dispatch({
            type: 'ADD_TO_CART',
            item: {
                id: props.id,
                image: props.image,
                price: props.price,
                rating: props.rating,
                title: props.title
            }
        });
    }

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
            <button onClick={addToCart}>Thêm vào giỏ hàng</button>
        </div>
    );
}

export default Product;