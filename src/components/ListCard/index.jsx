import { List, ListHeader, ListBody } from "./style"
import cardsVoids from "../../assets/NoCard.png"
import Button from "../Button"
import React from "react"


const ListCard = ({ cards, setFilterCards, children }) => {
    
    return (
        <List>
            <ListHeader>
                <h2>Financial Summary</h2>

                <nav>
                    <Button size="s" color="dashboard" onClick={ () => setFilterCards([]) }>
                        All
                    </Button>
                    <Button size="s" color="dashboard" onClick={ () => setFilterCards(cards.filter(card => card.option === "Entry")) }>
                        Entry
                    </Button>
                    <Button size="s" color="dashboard" onClick={ () => setFilterCards(cards.filter(card => card.option === "Expenses")) }>
                        Expenses
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
                            <h2>You don't have any releases yet.</h2>

                            <img src={ cardsVoids } alt="Cards voids" />
                        </>
                    )
                }
            </ListBody>
        </List>
    )
}

export default ListCard
