import React from "react";


import ShowButton from "../button/ShowButton";
import EditButton from "../button/EditButton";
import DeleteButton from "../button/DeleteButton";

class Row extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: this.props.item,
            tds : []
        };
        this.fetchTds();
    }

    async fetchTds() {
        let data = await this.state.item.data();
        let tds = [];
        data.map((column, index) => (
            tds.push(<td key={index}>{column}</td>)
        ));

        this.setState({tds : tds});

    }
    

    
    render() {
        
        
        

        return <tr>
            <td>
            <ShowButton to={this.props.item.show()}></ShowButton>
            </td>
            {this.state.tds}

            <td>
            <EditButton to={this.props.item.editLink()}></EditButton>
            <DeleteButton onClick={this.props.onDelete.bind(this)} id={this.props.item._id}></DeleteButton>
            </td>


        </tr>;
    }
    }

export default Row;