import React from "react";

class DeleteButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    
    render() {
        return <button onClick={this.props.onClick} id={this.props.id}
        style={{
            backgroundColor: "rgb(211,61,62)",
            border: "none",
            cursor: "pointer",
            color: "#fff",
            borderRadius: "0.2rem",
            padding: "0.5rem",
        }}
        >
            <i className="fa fa-trash-o" aria-hidden="true"></i>
            Supprimer
        </button>;
    }
    }

export default DeleteButton;