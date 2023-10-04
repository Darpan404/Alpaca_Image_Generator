import React from 'react'
import './Intro.css';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import Github from '../../img/github.png';
import Linkedin from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/hero-right.png'
import thumbup from '../../img/thumbup.png'
import crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'


const Intro  = () => {
    return(
        <div className='intro'>
            <div className='i-left'> 
            <div className='i-name'>
                <p>We Provide the Best Services</p>
                <span>Design Solution For Any Media</span> 
                <i className='lead'>Leading Software Technology Company,Producting The Quality Work</i>
            </div>
            <button className='button i-button'>
                Discover More
            </button>
            <div className='i-icons'>
                <img src={Linkedin}></img>
                <img src={Github}></img>
                <img src={Instagram}></img>
            </div>
            </div>
            <div className='i-right'>
                <img src={Vector1}></img>
                <img src={Vector2}></img>
                <img src={boy}></img>
                <img src={glassesimoji}></img>
                <div style={{top:'4%', left:'68%'}}>
                    <FloatingDiv image={crown} txt1='web' txt2='developer'></FloatingDiv>
                </div>
                <div style={{top:'28rem', left:'0rem'}}>
                    <FloatingDiv image={thumbup} txt1='UI & UX'txt2='Designer'></FloatingDiv>
                </div>
                <div className='blur' style={{background:"rgb(238 210 255)"}}></div>
                <div className='blur'
                style={{
                    background:'#C1F5FF',
                    top: '17rem',
                    width: '21rem',
                    height: '11rem',
                }}></div>
            </div>

        </div>
    )

}

export default Intro;