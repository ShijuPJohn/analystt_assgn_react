import React from 'react';
import './header.css'

function Header(props) {
    return (
        <header className={"header"}>
            <div className={'logo-box'}>
                {/*<img src="logo.png" alt=""/>*/}
                <h1 className={'header-logo'}>My Book Shop</h1>
            </div>
            <nav className={'main-nav'}>
                <ul>
                    <li>Home</li>
                    <li>Login</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;