import React from 'react'
import PageTemplate from '../../components/PageTemplate/PageTemplate'
import construction from '../../assets/construction.svg'

function ComingSoon() {
    return (
        <PageTemplate title='Em construção' imgSrc={construction} imgAlt='imagem de um porquinho sendo construído' text='Parece que essa página ainda não foi implementada... Tente novamente mais tarde!' />
    )
}

export default ComingSoon
