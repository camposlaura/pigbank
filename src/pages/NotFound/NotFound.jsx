import React from 'react'
import PageTemplate from '../../components/PageTemplate/PageTemplate'

function NotFound() {
    return (
        <PageTemplate title='Erro 404' imgSrc="../../assets/confused-pig.svg" imgAlt='imagem de um porquinho confuso' text='Ops! Parece que o endereço que você digitou está incorreto...' />
    )
}

export default NotFound