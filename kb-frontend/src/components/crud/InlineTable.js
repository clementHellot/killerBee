import React from "react";

class InlineTable extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        };
    }

    render(){
        const body = Object.entries(this.props.item).map(([key, value], index) => (
            <tr key={index}>
              <th>{key}</th>
              <td>{value}</td>
            </tr>
          ));
          

        return (
            <table>
                <tbody>
                    {body}
                </tbody>

            </table>
        );
    }
}

export default InlineTable;