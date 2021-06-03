import React from 'react'

// FIXME: ajeitar esse props pra receber oq eu quero direitinho
function Card(props) {
    return (
        <div className='card'>

            <div className='coin-name'>
                <h3>{props.name}</h3>
                <h3 id='initials'>{props.code}</h3>
            </div>

            <div className='coin-info'>
                <h3>Máxima: {props.high}</h3>
                <h3>Mínima: {props.low}</h3>
                <h3>Atualizado em {props.create_date}</h3>
            </div>
            
        </div>
    )
}

export default Card
