import styled from "styled-components"


export const Container = styled.div`
    
    display: flex;
    justify-content: center;
    flex-direction: row;

    min-height: 100vh;
    padding: 4rem 1rem;

    background: var(--background-home);
    color: var(--white);
`

export const Content = styled.div`

    width: 100%;
    max-width: 1024px;

    display: flex;
    justify-content: space-between;

    & > div h1 {
        font-size: 38px;
        line-height: 48px;
    }

    & > div span {
        font-size: 16px;
    }

    & > div div {
        width: 100%;
        max-width: 324px;

        padding: 23px 0;
    }

    .divBotao {

        button {
            width: 100%;

            @media (min-width: 355px) {
                width: unset;
            }
        }
    }

    .logo {
        align-items: center;
        padding: 20px;

        img {
            width: 100%;
        }
    }

    @media screen and (min-width: 768px) {

        align-items: center;
        flex-direction: row;
    }

    @media screen and (max-width: 1000px) {

        flex-direction: column;
        justify-content: unset;
        align-items: unset;
    }
`
