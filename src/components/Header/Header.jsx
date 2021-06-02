import React from 'react'
import './Header.css'

function Header() {
    return (
        <header>
            <h1>PigBank</h1>
            <nav >
                <ul className='nav-container'>
                    {/* TODO: trocar isso aqui por botões */}
                    <li>Cotação Moedas</li>
                    <li>Acessar</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
