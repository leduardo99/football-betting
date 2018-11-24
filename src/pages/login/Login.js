/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';

import './styles.css';

export default class Login extends Component {
    state = {
        user: "",
        password: ""
    }

    handleRegistro = () => {
        this.props.history.push("/registro");
    }

    handleLogin = async (e) => {
        e.preventDefault();
        const { user, password } = this.state;

    }

    handleOnChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        console.log(name, value)

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div className="div-panel">
                <div className="wrapper fadeInDown">
                    <div id="formContent">
                        <div id="formHeader">
                            <h2 className="active">Login</h2>

                            <h2 className="inactive underlineHover" onClick={this.handleRegistro}>Cadastrar</h2>
                        </div>

                        <div className="form-padding">
                            <form>
                                <input type="text" id="login" className="fadeIn second" placeholder="Login" name="user" onChange={(event) => this.handleOnChange(event)} />
                                <input type="password" id="password" className="fadeIn third" placeholder="Senha" name="password" onChange={(event) => this.handleOnChange(event)} />
                                <input type="submit" className="fadeIn fourth" value="Entrar" onClick={this.handleLogin} />
                            </form>
                        </div>

                        <div id="formFooter">
                            <a className="underlineHover" href="#">Esqueceu a senha?</a>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}
