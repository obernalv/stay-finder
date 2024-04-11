import React from 'react'
import { Link } from 'react-router-dom'
import './style/PrincipalHeader.css'

const PrincipalHeader = () => {
    return (
        <header className='header-content'>
            <h1><Link to='/'><img className='header__logo' src="/images/recurso.png" alt="" /></Link></h1>
            <nav className='header-nav'>
                <ul className='nav-list'>
                    <li className='nav__items'>
                        <Link className='link' id="firstLink" to='/reservations'>Reservations</Link>
                    </li>
                    <li className='nav__items'>
                        <Link className='link' id="secondLink" to='/register'>Register</Link>
                    </li>
                    <li className='nav__items'>
                        <Link className='link' to='/login'>Login</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default PrincipalHeader
