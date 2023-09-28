import React from "react";

import { Link } from "react-router-dom";

import Table from "./Table";

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    render() {
        

        return <div>
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
            }}>
                <h2>{this.props.title}</h2>
                <div
                style={{
                    margin: " 0 1rem",
                }}>
                <Link to={this.props.create} style={{
                    backgroundColor: "rgb(52,199,89)",
                    border: "none",
                    cursor: "pointer",
                    color: "#fff",
                    borderRadius: "0.2rem",
                    padding: "0.5rem",
                }}>Create</Link>

                </div>
            </div>
            <Table  thead={this.props.thead} data={this.props.data} onDelete={this.props.onDelete}/>
            

        </div>;
    }
    }

export default Index;