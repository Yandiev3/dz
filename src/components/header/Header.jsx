import React from 'react'
import './header.sass'
import Nav from '../nav/Nav'

const Header = () => {
    return (
       <div className="container">
            <header className='header'>
                <img src="images/logo.svg" alt="" className="logo" />
                <Nav />
                <img src="images/menu.svg" alt="" className="menu-" />
            </header>
       </div>
    )
}

export default Header