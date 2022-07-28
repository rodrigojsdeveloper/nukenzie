import styled, { css } from "styled-components"


export const ButtonStyled = styled.button`

    font-weight: 500;
    font-size: 16px;

    border-radius: 8px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    :hover {
        transform: translateY(-0.15em);
    }

    ${props => {

        switch(props.tamanho) {

            case "gg":
                return css`
                    width: 100%;
                    max-width: 314px;
                    height: 48px;
                `

            case "g":
                return css`
                    padding: 0 6.5rem;
                    height: 48px;
                `

            case "p":
                return css`
                    padding: 15px;
                    height: 40px;
                `

            default:
                return false
        }
    }}

    ${props => {

        switch(props.cor) {

            case "home":
                return css`
                    color: var(--white);
                    background: var(--background-button-home);
                    border: 1px solid var(--background-button-home);

                    :hover {
                        
                        box-shadow: 0 0.5em 0.5em -0.4em var(--background-button-home);
                    }
                `
            
            case "dashboard":
                return css`
                    color: var(--color-text-header);
                    background: var(--background-button-dashboard);
                    border: 1.4px solid var(--background-button-dashboard);
                    
                    :hover {
                        
                        box-shadow: 0 0.5em 0.5em -0.4em var(--background-button-dashboard);
                    }
                `

            default:
                return false
        }
    }}
`
