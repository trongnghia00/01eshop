import React from "react";
import '../css/login.css';
import { NavLink } from 'react-router-dom';
import StorefrontIcon from '@mui/icons-material/Storefront';

const Login = () => {
    return (
        <div className="login">
            <NavLink to="/" style={{textDecoration: "none"}}>
                <div className="login_logo">
                    <StorefrontIcon className="login_logoImage" fontSize="large" />
                    <h2 className="login_logoTitle">NShop</h2>
                </div>
            </NavLink>
            <div className="login_container">
                <h1>Đăng nhập</h1>
                <form>
                    <h5>Email</h5>
                    <input type="text" />
                    <h5>Password</h5>
                    <input type="password" />
                    <button type="submit" className="login_sinInButton">
                        Đăng nhập
                    </button>
                    <button className="login_registerButton">
                        Tạo tài khoản mới
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;