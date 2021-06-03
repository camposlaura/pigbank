import React /* , {useState, useEffect} */ from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Title from '../../components/Title/Title'
// import Card from '../../components/Card/Card'
// import GetData from '../../service/api'
// import './Quotation.css'

function Quotation() {

    // const [coins, setCoins] = useState([]);

    // async function getCoins() {
    //     const data = await GetData();
    //     setCoins(data);
    // }

    // useEffect(() => {
    //     getCoins();
    // })

    return (
        <>
            <Header />
            <Title text='Cotação Moedas' />

            {/* { coins.map(item => <Card />) } */}

            <Footer />
        </>
    )
}

export default Quotation
