import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Button from '../../components/Button/Button'
import './PageTemplate.css'

function PageTemplate({title, imgSrc, imgAlt, text}) {
    return (
        <>
            <Header></Header>

            <div className='template-container'>    
                <h1>{title}</h1>
                <img src={imgSrc} alt={imgAlt} />
                <p>{text}</p>
                <Button href='/'>Voltar</Button>
            </div>      

            <Footer></Footer>
        </>    
    )
}

export default PageTemplate
