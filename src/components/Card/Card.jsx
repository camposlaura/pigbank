import React from 'react'
import './Card.css'

// FIXME: ajeitar esse props pra receber oq eu quero direitinho
function Card({info, key}) {

    let coinName = info.name.split("/");

    return (
        <div className='card' key={key}>

            <div className='coin-name'>
                <h3>{coinName[0]}</h3>
                <h3 id='initials'>{info.code}</h3>
            </div>

            <div className='coin-info'>
                <h3>Máxima: R$ {info.high}</h3>
                <h3>Mínima: R$ {info.low}</h3>
                <h3>Atualizado em {info.create_date}</h3>
            </div>
            
        </div>
    )
}

export default Card
