import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"
import { Doughnut } from "react-chartjs-2"
import { Container } from "./style"
import React from "react"


const CardTotal = ({ cards }) => {

    ChartJS.register(ArcElement, Tooltip, Legend)

    const data = {

        labels: [ "Entry", "Expenses" ],
        datasets: [
            {
                label: "# of Votes",
                data: [
                    cards.filter(card => card.option === "Entry").reduce((valoAnterior, valorAtual) => valoAnterior + +valorAtual.price, 0),

                    cards.filter(card => card.option === "Expenses").reduce((valoAnterior, valorAtual) => valoAnterior + +valorAtual.price, 0)
                ],
                backgroundColor: [
                    "rgb(3, 184, 152)",
                    "rgb(233, 236, 239)"
                ],
                borderColor: [
                    "rgb(3, 184, 152)",
                    "rgb(233, 236, 239)"
                ]
            }
        ]
    }


    return (
        <Container>
            <p>Amount: <span>$ { cards.reduce((valoAnterior, valorAtual) => valoAnterior + +valorAtual.price, 0).toFixed(2).replace(".", ",") }</span></p>
            <Doughnut data={ data } />
        </Container>
    )
}

export default CardTotal
