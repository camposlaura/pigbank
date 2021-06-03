import React from 'react'
import PageTemplate from '../../components/PageTemplate/PageTemplate'
import pig from '../../assets/confused-pig.svg'

function NotFound() {
    return (
        <PageTemplate title='Erro 404' imgSrc={pig} imgAlt='imagem de um porquinho confuso' text='Ops! Parece que o endereço que você digitou está incorreto...' />
    )
}

export default NotFound