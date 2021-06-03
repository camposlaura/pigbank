import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Button from '../../components/Button/Button'
import Title from '../../components/Title/Title'
import piggyBank from '../../assets/piggy-bank.svg'
import people from '../../assets/people.svg'

function HomePage() {
    return (
        <>
            <Header />

            <Title text='Fique por dentro!'/>

            <Footer />
        </>
    )
}

export default HomePage
