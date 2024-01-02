import React from "react"
import NavBar from "../components/NavBar";

function Header() {
    return(
        <>
                <header className="header">
                    <NavBar/>
                    <div className="hero-box">
                        <div className="hero-box-item-one"></div>
                        <div className="hero-box-item-two">
                        <div className="hero-text">
                        <h1 className="hero-heading">A Place where Your health Resonants</h1>
                        <p className="hero-p"></p>
                        <button id="cta">BOOK A SESSION</button>
                        </div>
                        </div>
                        <div className="hero-box-item-three"></div>
                    </div>
                </header>
        </>
    )
}

export default Header;