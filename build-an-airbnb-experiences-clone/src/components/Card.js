import React from "react";
// import cardPhoto from "../images/card-photo.png"
// import starPhoto from "../images/star.png"
import "./Card.css"
function Card(props) {
    console.log(props.item)
    let badgeText
    if (props.item.iopenSpots === 0) {
        badgeText = "SOLD OUT"
    }else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <div className="card">
            {
                badgeText && 
                <div className="card--badge">{badgeText}</div>
            }           
            <img src={`../images/${props.item.coverImg}`} className="card--photo"/>
            <div className="card--status">
                <img src={"../images/star.png"} className="card--star"/>
                <span>{props.item.status.rating}</span>
                <span className="gray">({props.item.status.reviewCount})·</span>
                <span className="gray">{props.item.location}</span>
            </div>
            <p>{props.item.title}</p>
            <p><span className="bold">From ${props.item.price}</span> / person</p>
        </div>
    )
}
export default Card;