/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import api from "../../services/api";
import $ from "jquery";

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

        if (!user) {
            $("#input-login").css("border-color", "red");
            setTimeout(function () {
                $("#input-login").css("border-color", "");
            }, 3000);
        }

        if (!password) {
            $("#input-password").css("border-color", "red");
            setTimeout(function () {
                $("#input-password").css("border-color", "");
            }, 3000);
        }

        if (!user || !password) return;
        $("#icon-loading").addClass("fas fa-sync-alt loading-refresh-animate");

        let retriveUsername = await api.get(`users/username/${user}`);

        if (!retriveUsername.data) {
            $("#alert-login").addClass("alert alert-danger").text("O usuário informado é inválido!");
            $("#icon-loading").removeClass("fas fa-sync-alt loading-refresh-animate");
            setTimeout(function () {
                $("#alert-login").removeClass("alert alert-danger");
            }, 5000)
        }
        else if (password !== retriveUsername.data.password) {
            $("#alert-login").addClass("alert alert-danger").text("A senha informada está incorreta!");
            $("#icon-loading").removeClass("fas fa-sync-alt loading-refresh-animate");
            setTimeout(function () {
                $("#alert-login").removeClass("alert alert-danger");
            }, 5000)
        } else {
            sessionStorage.setItem("name", retriveUsername.data.name);
            sessionStorage.setItem("email", retriveUsername.data.email);
            sessionStorage.setItem("username", retriveUsername.data.username);
            sessionStorage.setItem("admin", retriveUsername.data.admin);

            this.props.history.push('/main');
        }
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
                    <div class="" role="alert" id="alert-login" data-dismiss="alert"></div>
                    <div id="formContent">
                        <div id="formHeader">
                            <h2 className="active">Login</h2>

                            <h2 className="inactive underlineHover" onClick={this.handleRegistro}>Cadastrar</h2>
                        </div>

                        <div className="form-padding">
                            <form>
                                <input
                                    type="text"
                                    id="input-login"
                                    className="fadeIn second"
                                    placeholder="Login"
                                    name="user"
                                    onChange={(event) => this.handleOnChange(event)}
                                    required={true}
                                />
                                <input
                                    type="password"
                                    id="input-password"
                                    className="fadeIn third"
                                    placeholder="Senha"
                                    name="password"
                                    onChange={(event) => this.handleOnChange(event)}
                                    required
                                />
                                <button type="submit" className="fadeIn fourth btn-login" value="Entrar" onClick={this.handleLogin} >Entrar &nbsp;<i className="" id="icon-loading"></i></button>
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
