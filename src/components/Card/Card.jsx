import React from 'react'
import './Card.css'

function Card({info, key}) {

    let coinName = info.name.split("/");

    let lastUpdated = info.create_date.split('');
    let lastUpdatedFormated = [lastUpdated[8], lastUpdated[9], '/', lastUpdated[5], lastUpdated[6], '/', lastUpdated.slice(0,4).join(''), ' às ', lastUpdated.slice(11,19).join('') ].join('');

    return (
        <div className='card' key={key}>

            <div className='coin-name-out'>
                <div className='coin-name-in'>
                    <h3 id='name'>{coinName[0]}</h3>
                    <h3 id='initials'>{info.code}</h3>
                </div>
            </div>

            <div className='coin-info'>
                <h3>Máxima: R$ {info.high}</h3>
                <h3>Mínima: R$ {info.low}</h3>
                <h3 id='last-updated'>Atualizado em {lastUpdatedFormated}</h3>
            </div>
            
        </div>
    )
}

export default Card
