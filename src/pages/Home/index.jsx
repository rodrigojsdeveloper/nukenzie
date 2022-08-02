import title from "../../assets/Nu-Kenzie.png"
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
                    <img src={ title } alt="Nu Kenzie" />

                    <div>
                        <h1>Centralize control of your finances</h1>
                    </div>

                    <span>quickly and safely</span>

                    <div className='divBotao'>
                        <Button size="m" color="home" onClick={ () => history.push("/dashboard", { message: "You are Dashboard" }) }>
                            Start
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
