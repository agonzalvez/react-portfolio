import React from 'react'
import './navbar.css'

function navbar() {
    return (
        <div className='navbar'>
            <div className="wrapper">
                <div className="left">
                    <a href="#top" className='name'>Alejandro Gonzalvez</a>
                    <div className="itemContainer"></div>
                </div>
                <div className="right">
                    this is right
                </div>
            </div>
        </div>
    )
}

export default navbar
