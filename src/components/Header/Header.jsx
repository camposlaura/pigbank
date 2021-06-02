import React from 'react'
import Button from '../Button/Button'
import './Header.css'

function Header() {
    return (
        <header>
            <h1>PigBank</h1>
            <nav >
                <ul className='nav-container'>
                    {/* TODO: trocar isso aqui por botões */}
                    <li><Button className='header-buttons'>Cotação moedas</Button></li>
                    <li><Button className='header-buttons'>Acessar</Button></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
