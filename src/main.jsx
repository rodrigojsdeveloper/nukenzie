import { BrowserRouter } from "react-router-dom";
import GlobalStyled from "./styles/global";
import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyled />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
