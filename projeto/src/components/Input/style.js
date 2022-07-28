import styled, { css } from "styled-components"


export const Container = styled.div`

    text-align: left;
    
    div {
        padding: 10px 0 5px 0;
        font-size: 12px;
        color: var(--background-home);
        
        span {
            color: var(--color-error-label);
        }
    }
`

export const InputContainer = styled.input`

    background: var(--background-header-dashboard);
    border: 2px solid var(--background-header-dashboard);
    border-radius: 8px;
    padding: 0 16px;
    gap: 10px;

    &:focus {
        background: var(--white);
        border: 2px solid var(--background-home);

        box-shadow: 0px 4px 42px -12px var(--color-box-shadow);
    }

    &:focus::-webkit-input-placeholder {
        color: transparent;
    }

    ${props => {

        switch(props.tamanho) {

            case "g":
                return css`
                    height: 52.8px;
                    width: 100%;
                    max-width: 314px;
                `
            
            case "p":
                    return css`
                    width: 100%;
                    max-width: 128px;
                    height: 48px;
                `

            default:
                return false
        }
    }}
`
