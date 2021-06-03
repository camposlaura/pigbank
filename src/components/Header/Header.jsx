import React from 'react'
import Button from '../Button/Button'
import './Header.css'

function Header() {
    return (
        <header>
            <h1><a href='/'>PigBank</a></h1>
            <nav >
                <ul className='nav-container'>
                    <li><Button className='header-buttons' href='/quotation'>Cotação moedas</Button></li>
                    <li><Button className='header-buttons' href='/access'>Acessar</Button></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
