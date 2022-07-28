import { List, ListHeader, ListBody } from "./style"
import card from "../../assets/NoCard.png"
import Button from "../Button"
import React from "react"


const ListCard = ({ cards, setFilterCards, children }) => {
    
    return (
        <List>
            <ListHeader>
                <h2>Resumo financeiro</h2>

                <nav>
                    <Button tamanho="p" cor="dashboard" onClick={ () => setFilterCards([]) }>
                        Todos
                    </Button>
                    <Button tamanho="p" cor="dashboard" onClick={ () => setFilterCards(cards.filter(card => card.option === "Entradas")) }>
                        Entradas
                    </Button>
                    <Button tamanho="p" cor="dashboard" onClick={ () => setFilterCards(cards.filter(card => card.option === "Despesas")) }>
                        Despesas
                    </Button>
                </nav>
            </ListHeader>

            <ListBody>
                {
                    cards.length > 0 ? (
                        <>
                            { children }
                        </>
                    ) : (
                        <>
                            <h2>Você ainda não possui nenhum lançamento</h2>

                            <img src={ card } alt="Cards vazios" />
                        </>
                    )
                }
            </ListBody>
        </List>
    )
}

export default ListCard
