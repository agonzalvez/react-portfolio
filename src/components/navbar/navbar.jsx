import React from 'react'
import './navbar.scss'

function navbar() {
    return (
        <div className='navbar'>
            <div className="wrapper">
                <div className="left">
                    <a href="#top" className='name'>Alejandro Gonzalvez <i class="fas fa-code-branch"></i></a>
                    <div className="itemContainer"></div>
                </div>
                <div className="right">
                    <div className="hamburger"></div>
                    <span className="line-1"></span>
                    <span className="line-2"></span>
                    <span className="line-3"></span>
                </div>
            </div>
        </div>
    )
}

export default navbar
