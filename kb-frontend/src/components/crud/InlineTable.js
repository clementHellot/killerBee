import React from "react";

class InlineTable extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        };
    }

    browseField(key,value,index){
        switch (typeof value) {
            case "string":
                return (<tr key={index}>
                <th>{key}</th>
                <td>{value}</td>
              </tr>);
            case "number":
                return (<tr key={index}>
                <th>{key}</th>
                <td>{value}</td>
                </tr>);
            case "object":
                let body = [];
                for (const [key2, value2] of Object.entries(value)) {
                    body.push(this.browseField(key2,value2,index));
                }
                 
                return (<tr>
                    <th>{key}</th>
                    <td>{body}</td>
                    </tr>);
                

                break;
        
            default:
                return (<div></div>);
                break;
        }
    }


    render(){


        const body = Object.entries(this.props.item).map(([key, value], index) => (
            this.browseField(key,value,index)
            
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