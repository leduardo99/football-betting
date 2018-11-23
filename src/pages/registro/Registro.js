/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';

import './styles.css';

export default class Registro extends Component {
    state = {
        name: "",
        user: "",
        password: "",
        email: ""
    }

    handleLogin = () => {
        this.props.history.push("/login");
    }

    handleOnChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        console.log(name, value)

        this.setState({
            [name]: value
        });
    }

    generateNumberId = () => {
        var randomized = Math.ceil(Math.random() * Math.pow(10, 18));//Cria um número aleatório do tamanho definido em size.
        var digito = Math.ceil(Math.log(randomized));//Cria o dígito verificador inicial
        while (digito > 10) {//Pega o digito inicial e vai refinando até ele ficar menor que dez
            digito = Math.ceil(Math.log(digito));
        }
        var id = randomized + digito;//Cria a ID
        return id;
    }

    render() {
        return (
            <div className="div-panel">
                <div className="wrapper fadeInDown">
                    <div id="formContent">
                        <div id="formHeader">
                            <h2 class="inactive underlineHover" id="loginButton" onClick={this.handleLogin}>Login</h2>

                            <h2 class="active">Cadastrar</h2>
                        </div>

                        <div className="form-padding">
                            <form>
                                <input type="text" id="name" class="fadeIn second" placeholder="Nome completo" name="name" onChange={(event) => this.handleOnChange(event)} />
                                <input type="text" id="user" class="fadeIn third" placeholder="Usuário" name="user" onChange={(event) => this.handleOnChange(event)} />
                                <input type="email" id="email" class="fadeIn fourth" placeholder="E-mail" name="email" onChange={(event) => this.handleOnChange(event)} />
                                <input type="password" id="password" class="fadeIn five" placeholder="Senha" name="password" onChange={(event) => this.handleOnChange(event)} />
                                <input type="submit" class="fadeIn six" value="Cadastrar" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
