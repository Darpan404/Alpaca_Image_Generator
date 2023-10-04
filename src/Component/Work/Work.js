import React from "react";
import './Work.css';
import wk from '../../img/feature.png'
const Work  = () => {
    return( 
    <div className="work">
        <div className="work-left">
            <span>who We Work With</span>
            <span>~start business</span>
            <span>~Agencies</span>
            <span>~Enterprise</span>
            <span>~small & Medium business</span>
            <span>We ensures complete development of any organization through our services. Our tremendous IT services exhilarate the growth of organizations we provide services on.<br></br>
            <span> ~ Content Generation And Optimization<br></br>
               ~ Integrated Online Marketing Strategies</span>
            </span>
            <button className="button i-button">Explore more</button>
            <div className='blur' style={{background:"rgb(238 210 255)"}}></div>
        </div> 

        <div className="work-right">
            <img src={wk} alt="wk"></img>
            <div className="blur s-blur2" style={{background: "var(--purple)" }}></div>
            
                
                 
        </div>   
    </div>
    
    )

}
export default Work;