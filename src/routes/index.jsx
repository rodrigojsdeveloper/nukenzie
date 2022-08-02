import { Switch, Route } from "react-router-dom"
import Dashboard from "../pages/Dashboard"
import NotFound from "../pages/NotFound"
import Home from "../pages/Home"
import React from "react"


const Routes = () => {
    
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            
            <Route path="/dashboard">
                <Dashboard />
            </Route>

            <Route component={ NotFound } />
        </Switch>
    )
}

export default Routes
