import React, {useState, useEffect} from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Title from '../../components/Title/Title'
import Card from '../../components/Card/Card'
import {getData} from '../../service/api'
import './Quotation.css'

function Quotation() {

    const [coins, setCoins] = useState([]);

    async function getCoins() {
        const data = await getData();
        let values = [];
        Object.values(data).forEach((value)=> {
            console.log(value);
            values.push(value);
        })
        setCoins(values);
    }

    useEffect(() => {
        getCoins();
    }, [])

    useEffect(() => {
        // console.log(coins);
    }, [coins])

    return (
        <>
            <Header />
            <Title text='Cotação Moedas' className='title'/>

            <div className="coins-container">

                { coins.map((info, key) => <Card info={info} key={key} />) }

            </div>

            <Footer />
        </>
    )
}

export default Quotation
