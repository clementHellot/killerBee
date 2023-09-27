import React from "react";


import ShowButton from "../button/ShowButton";
import EditButton from "../button/EditButton";
import DeleteButton from "../button/DeleteButton";

class Row extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: this.props.item,
        };
    }

    

    
    render() {
        

        const tds = this.props.item.data().map((column, index) => (
            <td key={index}>{column}</td> 
        ));

        return <tr>
            <td>
            <ShowButton to={this.props.item.show()}></ShowButton>
            </td>
            {tds}

            <td>
            <EditButton to={this.props.item.editLink()}></EditButton>
            <DeleteButton onClick={this.props.onDelete.bind(this)} id={this.props.item._id}></DeleteButton>
            </td>


        </tr>;
    }
    }

export default Row;