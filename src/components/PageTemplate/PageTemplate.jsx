import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Button from '../../components/Button/Button'
import './PageTemplate.css'

function PageTemplate({title, imgSrc, imgAlt, text}) {
    return (
        <div className='page-container'>
            <Header></Header>

            <h1>{title}</h1>
            <img src={imgSrc} alt={imgAlt} />
            <p>{text}</p>
            <Button>Voltar</Button>

            <Footer></Footer>
        </div>
    )
}

export default PageTemplate
