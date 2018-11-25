import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Index from "./pages/index/Index.js";
import Login from "./pages/login/Login.js";
import Registro from "./pages/registro/Registro.js";
import Main from "./pages/main/Main.js";

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Index} />
                    <Route path="/login" exact component={Login} />
                    <Route path="/registro" exact component={Registro} />
                    <Route path="/main" exact component={Main} />
                </Switch>
            </BrowserRouter>
        )
    }
}