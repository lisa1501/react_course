import React from "react";
import "./Hero.css"
function Hero() {
    return (
        <section className="hero">
            <img src={"../images/photo-grid.png"} className="hero--photo"/>
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">Plan a trip with help from local Hosts around the world
            </p>
        </section>

    )
}

export default Hero;