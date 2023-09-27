import React from "react";

class Input extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            value : this.props.value,
            label : this.props.label
        }
    }

    onChange(event){
        this.setState({value : event.target.value});
    }

    render()
    {
        return (
            <div>
                <label>{this.state.label}</label>
                <input type="text" value={this.state.value} onChange={this.onChange.bind(this)}/>
            </div>
        );
    }
}

export default Input;