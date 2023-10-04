import React from "react";
import './About.css';
import ab from '../../img/aobut.png'
const About  = () => {
    return( 
    <div className="about">
        <div className="about-left">
            <span>who We Are</span>
            <span>We provide perfect IT solutions & technology for any startups, brands and businesses</span>
            <span>We ensures complete development of any organization through our services. Our tremendous IT services exhilarate the growth of organizations we provide services on.<br></br>
            <span> ~ Content Generation And Optimization<br></br>
               ~ Integrated Online Marketing Strategies</span>
            </span>
            <button className="button i-button">Explore more</button>
            <div className='blur' style={{background:"rgb(238 210 255)"}}></div>
        </div> 

        <div className="about-right">
            <img src={ab} alt=""></img>
            <div className="blur s-blur2" style={{background: "var(--purple)" }}></div>
            
                
                 
        </div>   
    </div>
    
    )

}
export default About;