import titulo from "../../assets/Nu-Kenzie.png"
import logo from "../../assets/Group 277.svg"
import { useHistory } from "react-router-dom"
import { Container, Content } from "./style"
import Button from "../../components/Button"
import React from "react"


const Home = () => {

    const history = useHistory()

    return (
        <Container>
            <Content>
                <div>
                    <img src={ titulo } alt="Titulo" />

                    <div>
                        <h1>Centralize o controle das suas finanças</h1>
                    </div>

                    <span>de forma rápida e segura</span>

                    <div className='divBotao'>
                        <Button tamanho="g" cor="home" onClick={ () => history.push("/dashboard", { message: "Você está Na Dashboard" }) }>
                            Iniciar
                        </Button>
                    </div>
                </div>

                <div className='logo'>
                    <img src={ logo } alt="Nu Kenzie" />
                </div>
            </Content>
        </Container>
    )
}

export default Home
