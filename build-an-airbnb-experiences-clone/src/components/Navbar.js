import React from "react";
import airbnbLogo from "../images/airbnb-logo.png"

function Navbar() {
    return (
        <nav>
            <img 
            src={airbnbLogo}
            alt="Airbnb Logo"
            className="nav--logo"
            />
        </nav>
    )
}
export default Navbar;