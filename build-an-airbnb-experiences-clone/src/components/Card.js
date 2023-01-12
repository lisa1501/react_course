import React from "react";
// import cardPhoto from "../images/card-photo.png"
// import starPhoto from "../images/star.png"
import "./Card.css"
function Card(props) {
    console.log(props.item)
    let badgeText
    if (props.iopenSpots === 0) {
        badgeText = "SOLD OUT"
    }else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <div className="card">
            {
                badgeText && 
                <div className="card--badge">{badgeText}</div>
            }           
            <img src={`../images/${props.img}`} className="card--photo"/>
            <div className="card--status">
                <img src={"../images/star.png"} className="card--star"/>
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount})·</span>
                <span className="gray">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}
export default Card;