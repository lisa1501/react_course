import React from "react";
import cardPhoto from "../images/card-photo.png"
import starPhoto from "../images/star.png"
import "./Card.css"
function Card() {
    return (
        <div className="card">
            <img src={cardPhoto} className="card--photo"/>
            <div className="card--status">
                <img src={starPhoto} className="card--star"/>
                <span className="gray">5.0</span>
                <span className="gray">(6) ·</span>
                <span className="gray">USA</span>
            </div>
            <p>Life Lessons with Katie Zaferes</p>
            <p><span className="bold">From $136</span> / person</p>
        </div>
    )
}
export default Card;

// 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