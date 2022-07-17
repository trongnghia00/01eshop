import React, { useState } from "react";
import '../css/login.css';
import { NavLink } from 'react-router-dom';
import StorefrontIcon from '@mui/icons-material/Storefront';
import { useNavigate } from "react-router-dom";

import { auth } from "../utils/firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((response) => {
            console.log(response);
            alert('Login OK');
            navigate('/');
        })
        .catch((error) => {
            console.log(error.code);
            alert(error.message);
        })
    }

    const register = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then((response) => {
            console.log(response);
            alert('Register OK');
        })
        .catch((error) => {
            console.log(error.code);
            alert(error.message);
        })
    }

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
                    <input 
                        type="text" 
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <h5>Password</h5>
                    <input 
                        type="password" 
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <button 
                        type="submit" 
                        className="login_sinInButton" 
                        onClick={signIn}
                    >
                        Đăng nhập
                    </button>
                    <button 
                        className="login_registerButton"
                        onClick={register}
                    >
                        Tạo tài khoản mới
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;