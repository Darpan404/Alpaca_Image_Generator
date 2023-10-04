import React from 'react'
import './Navbar.css'
import Logo from '../../img/logo.png';


const Navbar  = () => {
    return(
        <div className='n-wrapper'>
            <div className='n-left'>
                <img className='n-name' src={Logo}></img>
                <div>Crowned Concept</div>
            </div>
            <div className='n-right'>
                <div className='n-list'>
                    <ul>
                        <li>Home</li>
                        <li>Services</li>
                        <li>About</li>
                        <li>Team</li>
                        <li>Clients</li>
                    </ul>
                </div>
                <button className='button n-button'>
                    contact
                </button>
            </div>
        </div>
    )
}
export default Navbar;