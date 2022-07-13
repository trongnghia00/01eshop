import React from "react";
import '../css/header.css';

import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
    return(
        <div className="header">
            <div className="header_logo">
                <StorefrontIcon className="header_logoImage" fontSize="large" />
                <h2 className="header_logoTitle">NShop</h2>
            </div>
            <div className="header_search">
                <input type="text" className="header_searchInput" />
                <SearchIcon className="header_searchIcon" />
            </div>
            <div className="header_nav">
                <div className="nav_item">
                    <span className="nav_itemLineOne">Hello Guest</span>
                    <span className="nav_itemLineTwo">Sign In</span>
                </div>
                <div className="nav_item">
                    <span className="nav_itemLineOne">Your</span>
                    <span className="nav_itemLineTwo">Shop</span>
                </div>
                <div className="nav_itemBasket">
                    <ShoppingBasketIcon fontSize="large"/>
                    <span className="nav_itemLineTwo nav_backetCount">0</span>
                </div>
            </div>
        </div>
    );
}

export default Header;