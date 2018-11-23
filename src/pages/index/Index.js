/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import $ from "jquery";

import './styles.css';

import img1 from "./images/img-1.jpg";
import img3 from "./images/img-3.jpg";
import luis_perfil from "./images/luisperfil.jpg";
import myka_perfil from "./images/mykaperfil.jpg";
import hairon_perfil from "./images/haironperfil.jpg";

export default class Index extends Component {
    jqueryEquipe = () => {
        $('html, body').animate({
            scrollTop: $("#equipe").offset().top
        }, 1000);
    }
	
    jquerySobre = () => {
        $('html, body').animate({
            scrollTop: $("#sobreProjeto").offset().top
        }, 1000);
    }
	
	handleLogin = () => {
		this.props.history.push("/");
	}

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                    <a className="navbar-brand h4 mb-0" href="#"><span className="foot-name">Football</span> <span className="betting-name">Betting</span></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-side" aria-controls="navbar-side" aria-expanded="false" aria-label="Abrir navegação">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbar-side">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Github</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link link-pointer " onClick={this.jqueryEquipe}>Equipe</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link link-pointer" onClick={this.jquerySobre}>Sobre o projeto</a>
                            </li>
                            <li className="nav-item">
                                <button type="button" className="btn btn-success" onClick={this.handleLogin}>Jogar agora</button>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    </ol>
                    <div id="carouselExampleIndicators" class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="d-block img-fluid w-100 mx-auto" src={img1} alt="First slide" />
                        </div>
                        <div class="carousel-item">
                            <img class="d-block img-fluid w-100 mx-auto" src={img3} alt="Third slide" />
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Anterior</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Próximo</span>
                    </a>
                </div>

                <div className="container" id="sobreProjeto">
                    <div className="row">
                        <div className="col-12 text-center mt-5">
                            <h1 className="display-3">Sobre o projeto</h1> 
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                    </div>
                </div>

                <div className="container mt-5" id="equipe">
                    <div className="row">
                        <div className="col-4">
                            <div className="card">
                                <img class="card-img-top img-fluid mx-auto d-block" src={luis_perfil} alt="Card image cap" id="imagens-perfil" />
                                <div className="card-body text-center">
                                    <h5 class="card-title">Desenvolvedor</h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-4">
                            <div className="card">
                                <img class="card-img-top img-fluid mx-auto d-block" src={myka_perfil} alt="Card image cap" id="imagens-perfil" />
                                <div className="card-body text-center">
                                    <h5 class="card-title">Desenvolvedor</h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-4">
                            <div className="card">
                                <img class="card-img-top img-fluid mx-auto d-block" src={hairon_perfil} alt="Card image cap" id="imagens-perfil" />
                                <div className="card-body text-center">
                                    <h5 class="card-title">Professor</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
