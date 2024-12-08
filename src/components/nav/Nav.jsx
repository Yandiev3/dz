import React from 'react'
import './nav.sass'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <nav className="menu">
            <Link to='/'>Главная</Link>
            <Link to='/shop'>Мазиг</Link>
            <Link to='/product'>Продукты</Link>
            <Link to='/about'>О нас</Link>
            <Link to='/contacts'>Контакты</Link>
        </nav>

    )
}

export default Nav