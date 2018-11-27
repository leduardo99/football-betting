import React, { Component } from 'react';
import ReactTable from "react-table";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import 'react-table/react-table.css'

import api from "../../services/api"
import moment from "moment";

export default class Admin extends Component {
    state = {
        data: [],
        team: "",
        points: "",
        position: ""
    }

    handleOnChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        console.log(name, value)

        this.setState({
            [name]: value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let obj = {
            team: this.state.team,
            points: this.state.points,
            position: this.state.position
        }
        this.state.data.push(obj);
        this.setState({
            data: this.state.data
        })
    };

    renderEditable = cellInfo => {
        return (
            <div
                style={{ backgroundColor: "#fafafa" }}
                contentEditable
                suppressContentEditableWarning
                onBlur={e => {
                    const data = [...this.state.data];
                    data[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
                    this.setState({ data });
                }}
                dangerouslySetInnerHTML={{
                    __html: this.state.data[cellInfo.index][cellInfo.column.id]
                }}
            />
        );
    };

    render() {
        const { data } = this.state;
        return (
            <div>
                <Header />
                <div className="container text-center p-2">
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            <input
                                type="text"
                                name="team"
                                placeholder="Time"
                                onChange={(event) => this.handleOnChange(event)}
                            />
                        </label>{" "}
                        <label>
                            <input
                                type="text"
                                name="position"
                                placeholder="Posição"
                                onChange={(event) => this.handleOnChange(event)}
                            />
                        </label>
                        <label>
                            <input
                                type="text"
                                name="points"
                                placeholder="Pontos"
                                onChange={(event) => this.handleOnChange(event)}
                            />
                        </label>
                        <br></br>
                        <div className="">
                            <button type="submit" className="btn btn-primary">Adicionar</button>
                            <button type="submit" className="btn btn-success">Salvar</button>
                        </div>
                    </form>
                </div>

                <div>
                    <ReactTable
                        data={data}
                        columns={[
                            {
                                Header: "#",
                                accessor: "position",
                                Cell: this.renderEditable
                            },
                            {
                                Header: "Time",
                                accessor: "team",
                                Cell: this.renderEditable
                            },
                            {
                                Header: "Pontos",
                                accessor: "points",
                                Cell: this.renderEditable
                            }
                        ]}
                        defaultPageSize={10}
                        className="-striped -highlight"
                    />
                </div>
            </div>
        );
    }
}
