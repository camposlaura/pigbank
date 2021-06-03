import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Button from '../../components/Button/Button'
import Title from '../../components/Title/Title'
import piggyBank from '../../assets/piggy-bank.svg'
import people from '../../assets/people.svg'
import './HomePage.css'

function HomePage() {
    return (
        <>
            <Header />

            <div className='home-container'>

                <div className='div-1'>
                    <img src={piggyBank} alt="desenho de um cofre em formato de porquinho" />
                    <div className='div-1-info'>
                        <h2>A mais nova alternativa de banco digital chegou!</h2>
                        <p>Feito para caber no seu bolso e otimizar<br/>seu tempo. O <strong>PigBank</strong> veio pra ficar.</p>
                        <Button href='/create-account'>Abra a sua conta</Button>
                    </div>
                </div>

                <Title text='Fique por dentro!'/>

                <div className='div-2'>
                    <p>Ao contrário do ditado popular, por aqui, quem se mistura<br/>com porco não come farelo! Conheça nossa plataforma<br/>exclusivamente dedicada para ampliar o seu patrimônio.</p>
                    <img src={people} alt="desenho de pessoas com dinheiro" />
                    <Button href='quotation'>Cotação Moedas</Button>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default HomePage
