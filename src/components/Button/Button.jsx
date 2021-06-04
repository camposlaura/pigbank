import React from 'react'
import './Button.css'

// TODO: tornar o botão inteiro clicavel, e não só o link dentro dele  (da pra fazer com Link)

function Button(props) {
    return (
        <button className={props.className}>
            <a href={props.href}>{props.children}</a>
        </button>
    )
}

export default Button
