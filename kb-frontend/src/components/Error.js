import React from "react";

class Error extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error : this.props.error,
        };
    }

    render() {
    const regex = /^[a-zA-Z0-9 ]+$/;
    if(!regex.test(this.props.error))
        return (<div></div>);


        return <div style={{
            backgroundColor: "rgb(255,80,70)",
            border: "none",
            color: "#fff",
            borderRadius: "0.2rem",
            padding: "0.5rem",
        }}>{this.state.error}</div>;
    }
}

export default Error;