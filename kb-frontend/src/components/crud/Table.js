import React from "react";

import Row from "./Row";

class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    

    render() {
        let thead_capitalized = this.props.thead.map((column, index) => (
            column.charAt(0).toUpperCase() + column.slice(1)
        ));

        const ths = thead_capitalized.map((column, index) => (
            <th key={index}>{column}</th>
        ));


        let trs = this.props.data.map((item, index) => (
                <Row item={item} onDelete={this.props.onDelete}></Row>
        ));

        if(this.props.data.length === 0)
        {  
            trs = <tr><td colSpan={thead_capitalized.length + 2}>No data</td></tr>;
        }


        return (
            <div>
                <table>
                    <thead>
                        <th></th>
                        {ths}
                        <th></th>
                    </thead>
                    <tbody>
                        {trs}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Table;