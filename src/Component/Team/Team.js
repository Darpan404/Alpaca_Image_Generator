import React from "react";
import './Team.css';
import ceo1 from '../../img/1.jpg';
const Team  = () => {
    return(
        <div className="team">
            <div className="blur s-blur2" style={{background: "var(--purple)" }}></div>
            <h1>Meet our Team member </h1>
            <img src={ceo1} alt="x"></img>
            <div className="blur s-blur2" style={{background: "var(--purple)" }}></div>
            <div className="blur s-blurl" style={{ background:"#ABF1FF94"}}></div>
      </div>
    )
}    

export default Team;