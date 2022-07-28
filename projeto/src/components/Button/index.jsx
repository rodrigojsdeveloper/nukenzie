import { ButtonStyled } from "./style"
import React from "react"


const Button = ({ children, tamanho, cor, ...rest }) => {

    return (
        <ButtonStyled tamanho={ tamanho } cor={ cor } {...rest}>
            { children }
        </ButtonStyled>
    )
}

export default Button
