import { Switch, Route } from "react-router-dom"
import Dashboard from "../pages/Dashboard"
import Home from "../pages/Home"
import NotFound from "../pages/NotFound"
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
