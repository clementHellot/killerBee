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
        let label = null;
        if(this.props.type !== "hidden")
            label = (<label>{this.state.label}</label>);

        return (
            <div style={{
                padding: "0.25rem 0.5rem",
            }}>
                {label}
                <input type={this.props.type} value={this.state.value} onChange={this.onChange.bind(this)}/>
            </div>
        );
    }
}

export default Input;