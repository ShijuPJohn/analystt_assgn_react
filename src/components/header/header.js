import React from 'react';
import './header.css'
import {Link} from "react-router-dom"

function Header(props) {
    return (
        <header className={"header"}>
            <div className={'logo-box'}>
                {/*<img src="logo.png" alt=""/>*/}
                <h1 className={'header-logo'}>My Book Shop</h1>
            </div>
            <nav className={'main-nav'}>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;