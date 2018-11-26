import React, { Component } from 'react';
import LoadingScreen from 'react-loading-screen';

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import img from "../index/images/img-1.jpg";

export default class Main extends Component {
    state = {
        loading: false
    }

    componentWillMount() {
        if (!sessionStorage.getItem("username")) this.props.history.push("/login");
        else if(sessionStorage.getItem("loading")) this.setState({ loading: true });
        else if (!sessionStorage.getItem("loading")) this.setState({loading: false});
    }

    closeLoading = () => {
        setTimeout(() => {
            this.setState({ loading: false })
            sessionStorage.removeItem("loading");
        }, 4000);
    }

    componentDidMount() {
        this.closeLoading();
    }

    render() {
        return (
            <div>
                <LoadingScreen
                    loading={this.state.loading}
                    bgColor='#1E1E1E'
                    spinnerColor='#318E58'
                    textColor='white'
                    text={`Seja bem vindo ${sessionStorage.getItem("username")}`}
                >
                    <Header />
                    <main role="main" className="container-fluid w-100">
                        <div class="row jumbotron jumbotron">
                            <div class="container-fluid">
                                <h1 class="display-3">Football Betting</h1>
                                <p className="lead">Abaixo está algumas rodadas dosponíveis para jogar, para iniciar suas apostas, escolha uma delas e aperte em jogar.<br />
                                    <strong>As rodadas podem ser jogadas apenas uma vez!</strong>
                                </p>
                            </div>
                        </div>

                        <div class="card-deck">
                            <div class="card">
                                <img class="card-img-top img-fluid" src={img} width="200" height="400" alt="discordpy.png" />
                                <div class="card-body">
                                    <h5 class="card-title text-center">Rodada 1</h5>
                                </div>
                            </div>
                            <div class="card">
                                <img class="card-img-top img-fluid" src={img} width="200" height="400" alt="discordjs.png" />
                                <div class="card-body">
                                    <h5 class="card-title text-center">Rodada 2</h5>
                                </div>
                            </div>
                            <div class="card">
                                <img class="card-img-top img-fluid" src={img} width="200" height="400" alt="discordjs.png" />
                                <div class="card-body">
                                    <h5 class="card-title text-center">Rodada 3</h5>
                                </div>
                            </div>
                            <div class="card">
                                <img class="card-img-top img-fluid" src={img} width="200" height="400" alt="discordjs.png" />
                                <div class="card-body">
                                    <h5 class="card-title text-center">Rodada 4</h5>
                                </div>
                            </div>
                        </div>
                    </main>
                    <Footer />
                </LoadingScreen>
            </div>
        );
    }
}
