import { ButtonStyled } from "./style"
import React from "react"


const Button = ({ children, size, color, ...rest }) => {

    return (
        <ButtonStyled size={ size } color={ color } {...rest}>
            { children }
        </ButtonStyled>
    )
}

export default Button
