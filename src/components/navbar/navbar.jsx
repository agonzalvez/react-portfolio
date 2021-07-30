import React from 'react'
import './navbar.css'

function navbar() {
    return (
        <div className='navbar'>
            <div className="wrapper">
                <div className="left">
                    <a href="#top" className='name'>Alejandro Gonzalvez <i class="fas fa-code-branch"></i></a>
                    <div className="itemContainer"></div>
                </div>
                <div className="right">
                    
                    <a href="#about" className='about-link'>About | </a>
                    <a href="#work" className='work-link'>Work | </a>
                    <a href="#contact" className='contact-link'>Contact | </a>
                    <a href="#resume" className='resume-link'>Resume </a>
                    <i class="fas fa-bars" />

                </div>
            </div>
        </div>
    )
}

export default navbar
