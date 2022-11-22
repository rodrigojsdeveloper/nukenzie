import lixeira_hover from '../../assets/lixeira-hover.png'
import lixeira from '../../assets/lixeira.png'
import styled from 'styled-components'


const Container = styled.div`

    display: flex;
    width: 100%;
    max-width: 560px;
    height: 87px;

    background: var(--background-header-dashboard);
    border-radius: 4px;
    margin-bottom: 35px;

    flex-direction: row;

    &:hover {
        background: var(--white);
        box-shadow: 0px 4px 42px -12px var(--color-box-shadow);

        transition: 0.75s;
    }

    & > hr {
        width: 4px;
        height: 87px;
        border: none;
        border-radius: 4px 0px 0px 4px;
    }

    & > div {
        display: flex;
        justify-content: space-between;
        max-width: 535px;
        width: 100%;
        padding: 5px 10px 0 10px;

        flex-direction: row;
    }

    & > div > div {
        display: flex;
    }

    .divCardLeft {
        display: flex;
        flex-direction: column;
        font-size: 16px;
        color: var(--background-home);
    }

    .divCardLeft > span {
        font-size: 12px;
        color: var(--color-price-card);
    }

    .divCardRight {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .divCardRight > span {
        font-size: 12px;

        margin-right: 120px;
    }

    .divCardRight > button {
        width: 22px;
        height: 22px;
        cursor: pointer;
        background: var(--background-button-dashboard);
        background: url(${ lixeira });

        transition: 1s;

        font-size: 12px;
    }

    .divCardRight > button:hover {
        background: url(${ lixeira_hover });
    }

    @media screen and (max-width: 510px) {
        
        .divCardRight > span {
            
            margin-right: 20px;
        }
    }
`

export { Container }
