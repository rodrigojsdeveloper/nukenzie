import styled from "styled-components"


export const Container = styled.div`

    width: 100%;
    max-width: 361px;
    padding: 10px;

    background: var(--white);
    border: 1px solid var(--background-button-dashboard);
    
    border-radius: 4px;
    margin-top: 15px;

    display: flex;
    flex-direction: column;
    align-items: center;

    p {
        padding: 10px 0;
        font-weight: bold;

        span {
            color: var(--background-button-home);
        }
    }
`
