import React from "react";
import { Link } from "react-router-dom";

class MenuItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    render() {
        return <Link to={this.props.link} >
            <i className={this.props.icon} style={{marginRight: '1rem'}}></i>
            {this.props.name}</Link>;
    }
    }

export default MenuItem;