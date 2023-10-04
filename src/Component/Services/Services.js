import React from "react"
import './Services.css'
import Card from '../Card/Card'
import wd from '../../img/icon2.png'
import ad from '../../img/icon4.png'
import dm from '../../img/icon3.png'
import ui from '../../img/icon1.png'
import bg from '../../img/solution.png'


const Services  = () => {
    return(
        <div className="services">
            <div className="awesome">
            <span>Dedicated to</span>
            <span>Service Our Customer</span>
            <span>Services and solutions we provide to businesses</span>
            <div className="blur s-blurl" style={{ background:"#ABF1FF94"}}></div>
            <img className="bg" src={bg} alt="bg"></img>
            </div>
            <div className="cards">

                <div style={{left: '14rem'}}>
                    <Card
                    emoji= {wd}
                    heading= {'Web Development'}
                    detail=  { 'html ,css, javascript , react , vue'}
                    />
                </div> 

                <div style={{ top:'12rem' ,left: '-4rem'}}>
                    <Card
                    emoji= {ad}
                    heading= {'Android Development'}
                    detail=  { 'Flutter ,Dart, Kotlin'}
                    />
                </div> 

                <div style={{left: '19rem', top:'16rem'}}>
                    <Card
                    emoji= {dm}
                    heading= {'Digital Marketing'}
                    detail=  { 'seo ,content, socialmedia, SEM'}
                    />
                </div> 

                <div style={{left: '4rem', top:'30rem'}}>
                    <Card
                    emoji= {ui}
                    heading= {'UI & UX design'}
                    detail=  { 'Adobe , wordpress , canva , Figma'}
                    />
                </div> 
                <div className="blur s-blur2" style={{background: "var(--purple)" }}></div>

                
            </div>
        </div>
    )
}
export default Services;