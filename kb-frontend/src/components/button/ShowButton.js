import React from "react";
import { Link } from "react-router-dom";


class ShowButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    render() {
        return <Link to={this.props.to} style={{
            backgroundColor: "#222",
            border: "none",
            cursor: "pointer",
            color: "#fff",
            borderRadius: "0.2rem",
            padding: "0.5rem",
        }}>
            <i className="fa fa-eye" style={{marginRight:"0.5rem"}}></i>
            Voir</Link>;
    }
    }

export default ShowButton;