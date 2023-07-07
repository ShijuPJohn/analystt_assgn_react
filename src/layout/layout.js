import React from 'react';
import Header from "../components/header/header";

function Layout(props) {
    return (
        <>
            <Header/>
            {props.children}
        </>
    );
}

export default Layout;