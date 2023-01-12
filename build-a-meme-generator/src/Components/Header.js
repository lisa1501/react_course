import React from "react";
import trollFace from "../images/troll-face.png"
import "./Header.css"


function Header() {
    return (
        <header className="header">
            <img 
                src={trollFace} 
                className="header--imgage"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Course - Project 3</h4>

        </header>
        
    )
}
export default Header;