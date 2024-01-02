import React from "react"
import NavBar from "../components/NavBar";

function Header() {
    return(
        <>
                <header className="header">
                    <NavBar/>
                    <div className="hero-box">
                        <div className="hero-box-item-one"></div>
                        <div className="hero-box-item-two"></div>
                        <div className="hero-box-item-three"></div>
                    </div>
                </header>
        </>
    )
}

export default Header;