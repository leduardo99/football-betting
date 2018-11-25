import React, { Component } from 'react';

// import { Container } from './styles';

export default class Main extends Component {
    componentWillMount() {
        if (!sessionStorage.getItem("username")) this.props.history.push("/login");
    }
    render() {
        return (
            <div>
                Olá {sessionStorage.getItem("name")}
            </div>
        );
    }
}
