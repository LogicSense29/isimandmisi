import React from "react"
import {Link} from "react-router-dom"

function NavBar() {
    return (
        <>
        <nav className="navbar">
            <div className="logo-div"><Link to="/">Logo</Link></div>
            <div className="link-div">
                <Link to="/about" className="nav-links">ABOUT</Link>
                <Link to="/contact" className="nav-links">CONTACT</Link>
                <Link to="/faq" className="nav-links">FAQ</Link>
            </div>     
        </nav>
        </>
    )
}

export default NavBar;