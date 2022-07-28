import { Container, HeaderStyled, Content } from "./style"
import { yupResolver } from "@hookform/resolvers/yup"
import titulo from "../../assets/Nu-Kenzie-black.png"
import useLocalStorage from "../../components/Hook"
import CardTotal from "../../components/CardTotal"
import ListCard from "../../components/ListCard"
import { useHistory } from "react-router-dom"
import Button from "../../components/Button"
import Input from "../../components/Input"
import { useForm } from "react-hook-form"
import Card from "../../components/Card"
import React, { useState } from "react"
import * as yup from "yup"


const Dashboard = () => {

    const history = useHistory()

    const [ cards, setCards ] = useLocalStorage("Nu Kenzie: cards", [])

    const [ option, setOption ] = useState("Entradas")

    const [ filterCards, setFilterCards ] = useLocalStorage("Nu Kenzie: filter", [])
  
    const addCard = newCard => {
  
        const copyNewCard = {...newCard}
        
        if(newCard.option === "Despesas") {

            copyNewCard.price = -copyNewCard.price
        }
    
        setCards([...cards, copyNewCard])
    }
  
    const removeCard = card => {
    
        setCards(cards.filter(x => x !== card))
    
        setFilterCards(filterCards.filter(x => x !== card))
    }

    const schema = yup.object().shape({
    
        description: yup
            .string()
            .required("Campo obrigatório!"),
        
        price: yup
            .string()
            .required("")
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmitFunc = data => {

        const { description, price } = data

        const newData = { description, price, option }

        addCard(newData)
    }

    return (
        <>
            <HeaderStyled>
                <div>
                    <img src={ titulo } alt="Nu Kenzie" />
                    
                    <Button
                    tamanho="p"
                    cor="dashboard"
                    onClick={ () => history.push("/", { message: "Você está na Home" } ) }
                    >Início</Button>
                </div>
            </HeaderStyled>
            
            <Container>
                
                <div className="divForm">
                    <Content onSubmit={ handleSubmit(onSubmitFunc) }>
                        <div>
                            <Input
                            tamanho="g"
                            type="text"
                            name="description"
                            autoComplete="off"
                            placeholder="Digite aqui sua descrição"
                            register={ register }
                            label="Descrição"
                            error={ errors.description?.message }
                            />

                            <span>Ex: Compra de roupas</span>
                        </div>

                        <section>
                            <Input
                            tamanho="p"
                            type="number"
                            name="price"
                            autoComplete="off"
                            placeholder="R$"
                            register={ register }
                            label="Valor"
                            error={ errors.price?.message }
                            />

                            <div>
                                <label>Tipo de valor</label>

                                <select name="options" onChange={ e => setOption(e.target.value) }>
                                    <option name="entradas">Entradas</option>
                                    <option name="despesas">Despesas</option>
                                </select>
                            </div>
                        </section>

                        <Button type="submit" tamanho="gg" cor="home">Inserir valor</Button>
                    </Content>

                    { cards.length > 0 && <CardTotal cards={ filterCards.length > 0 ? filterCards : cards } /> }
                </div>

                <ListCard cards={ cards } setFilterCards={ setFilterCards } children={

                    filterCards.length > 0 ? (
                        
                        filterCards.map((card, i) => <Card key={ i } card={ card } removeCard={ removeCard } />)
                        
                    ) : (

                        cards.map((card, i) => <Card key={ i } card={ card } removeCard={ removeCard } />)
                    )
                } />
            </Container>
        </>
    )
}

export default Dashboard
