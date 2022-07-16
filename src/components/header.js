import React from "react";
import '../css/header.css';

import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';

import { NavLink } from 'react-router-dom';

import { useDataValue } from "../utils/dataprovider";

const Header = () => {
    const [state, dispatch] = useDataValue();

    return(
        <div className="header">
            <NavLink to="/" style={{textDecoration: "none"}}>
                <div className="header_logo">
                    <StorefrontIcon className="header_logoImage" fontSize="large" />
                    <h2 className="header_logoTitle">NShop</h2>
                </div>
            </NavLink>
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
                <NavLink to="/checkout" style={{textDecoration:"none"}}>
                    <div className="nav_itemBasket">
                        <ShoppingBasketIcon fontSize="large"/>
                        <span className="nav_itemLineTwo nav_backetCount">{state.basket.length}</span>
                    </div>
                </NavLink>
            </div>
        </div>
    );
}

export default Header;