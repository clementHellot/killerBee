import React from "react";

import {Link} from "react-router-dom";

class EditButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    render() {
        return <Link to={this.props.to} style={{
            backgroundColor: "rgb(50,173,226)",
            border: "none",
            cursor: "pointer",
            color: "#fff",
            borderRadius: "0.2rem",
            padding: "0.5rem",
        }}>
            <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
            Modifier
        </Link>;
    }
    }

export default EditButton;