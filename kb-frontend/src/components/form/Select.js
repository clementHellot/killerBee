import React from "react";

class Select extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value : this.props.value,
            label : this.props.label,
            options : this.props.options
        }
    }

    onChange(event){
        this.setState({value : event.target.value});
    }

    render()
    {
        console.log(this.state.options);
        const options = this.state.options.map((option,index) => (
            <option key={index} value={option._id}>{option.name}</option>
        ));

        return (
            <div style={{
                padding: "0.25rem 0.5rem",
            }}>
                <label>{this.state.label}</label>
                <select value={this.state.value} onChange={this.onChange.bind(this)}>
                    {options}
                </select>
            </div>
        );
    }
}

export default Select;