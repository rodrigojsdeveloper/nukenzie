import { Container } from "./style"
import React from "react"

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"
import { Doughnut } from "react-chartjs-2"

const CardTotal = ({ cards }) => {

    ChartJS.register(ArcElement, Tooltip, Legend)

    const data = {

        labels: [ "Entradas", "Despesas" ],
        datasets: [
            {
                label: "# of Votes",
                data: [
                    cards.filter(card => card.option === "Entradas").reduce((valoAnterior, valorAtual) => valoAnterior + Number(valorAtual.price), 0),

                    cards.filter(card => card.option === "Despesas").reduce((valoAnterior, valorAtual) => valoAnterior + Number(valorAtual.price), 0)
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
            <Doughnut data={ data } />
        </Container>
    )
}

export default CardTotal
