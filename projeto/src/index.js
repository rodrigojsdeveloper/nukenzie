import { BrowserRouter } from "react-router-dom"
import GlobalStyled from "./styles/global"
import ReactDOM from "react-dom/client"
import React from "react"
import App from "./App"


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyled />
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
