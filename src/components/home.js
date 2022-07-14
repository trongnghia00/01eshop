import React from "react";
import '../css/home.css';
import Product from "./product";

const Home = () => {
  return (
    <div className="home">
        <div className="home_container">
            <img className="home_image" src="https://picsum.photos/768/278" alt="" />
            <div className="home_row">
                <Product />
                <Product />
            </div>
            <div className="home_row">
                <Product />
                <Product />
                <Product />
            </div>
            <div className="home_row">
                <Product />
            </div>
        </div>
    </div>
  );
}

export default Home;
