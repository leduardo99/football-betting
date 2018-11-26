/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { withRouter } from "react-router";
import api from "../services/api";
import $ from "jquery";

class Header extends Component {
    state = {
        ranking: "",
        home: "",
        admin: false
    }

    async componentWillMount() {
        let response = await api.get(`/users/username/${sessionStorage.getItem("username")}`);

        if (response.data.admin) {
            this.setState({ admin: true });
            $("#admin").removeClass("invisible");
        }
    }

    handleGoPage(e) {
        this.props.history.push(e.target.name);
    }

    handleLogout = (e) => {
        sessionStorage.removeItem("name");
        sessionStorage.removeItem("email");
        sessionStorage.removeItem("username");
        sessionStorage.removeItem("admin");
        this.props.history.push('/login');
    }

    render() {
        return (
            <header>
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand h4 mb-0" href="#"><span className="foot-name">Football</span> <span className="betting-name">Betting</span></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item">
                                <a class="nav-link" href="" name="/main" onClick={(event) => this.handleGoPage(event)}>Home <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="" name="/ranking" onClick={(event) => this.handleGoPage(event)}>Ranking</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link invisible" href="" id="admin">Admin</a>
                            </li>
                        </ul>
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item dropdown link-pointer">
                                <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Configurações</a>
                                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                                    <a class="dropdown-item" href=""><i class="fas fa-edit"></i> Alterar senha</a>
                                    <a class="dropdown-item" href=""><i class="fas fa-trash-alt"></i> Apagar conta</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" onClick={this.handleLogout}><i class="fas fa-sign-out-alt"></i> Sair</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}

export default withRouter(Header);