import React from "react";
import './Card.css'

const Card  = ({emoji, heading , detail}) => {
    return(
        <div className="card">
            <img src={emoji} alt="emoji"></img>
            <span>{heading}</span>
            <span>{detail}</span>
            <button className="c-button">Explore More</button>
        </div>
    )
}
export default Card;
