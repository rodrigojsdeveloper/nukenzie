import styled from 'styled-components'


const Container = styled.div`

    margin: 0 auto;
    max-width: 1440px;
    padding: 10px;
    width: 100%;

    display: flex;
    justify-content: center;

    flex-direction: row;

    margin-top: 2rem;

    .divForm {
        display: flex;
        align-items: center;
        flex-direction: column;
        
        margin-right: 30px;

        @media (max-width: 1000px) {

            margin-right: unset;
        }
    }

    @media (max-width: 1000px) {

        flex-direction: column;
    }
`

const HeaderStyled = styled.header`

    background: var(--background-header-dashboard);
    box-shadow: 0px 4px 32px -12px var(--color-box-shadow);

    padding: 0 40px;

    height: 88px;

    display: flex;
    align-items: center;

    & > div {

        width: 100%;
        max-width: 1440px;

        margin: 0 auto;

        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: row;
    }

    @media (max-width: 300px) {

        padding: 0 20px;
    }
`

const Content = styled.form`

    width: 363px;
    height: 351px;
    border: 1px solid var(--background-button-dashboard);
    border-radius: 4px;
    padding: 0 20px;
    gap: 10px;

    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width:900px) {

        width: 100% !important;
        max-width: 363px;
    }

    div > span {
        color: var(--color-span);
        font-size: 12px;
        padding-top: 5px; 
    }

    label {
        padding: 10px 0 5px 0;
        font-size: 12px;
        color: var(--background-home);
    }

    & > section {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        div {
            display: flex;
            flex-direction: column;
            justify-content: end;
            padding-right: 20px;
                
            width: 100%;

            select {
                background: var(--background-header-dashboard);
                border: 2px solid var(--background-header-dashboard);
                border-radius: 8px;
                padding-left: 5px;

                width: 100%;
                max-width: 150px;
                height: 48px;
                cursor: pointer;

                &:focus {
                    outline: none;
                }

                & > option:hover {
                    background: var(--background-button-dashboard);
                    
                }
            }
        }
    }

    & > section > div {
        
        @media screen and (max-width: 330px) {
        
            padding: 0 5px;
        }
    }

    & > button {
        margin-top: 1.5rem;
    }
`

export { Container, Content, HeaderStyled }
