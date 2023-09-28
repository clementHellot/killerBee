import React from "react";
import DeleteButton from "./button/DeleteButton";

import Input from "./form/Input";
import Select from "./form/Select";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: this.props.item,
      inputs: [],
    };
  }

  componentDidMount() {
    // Fetch item data if itemId is provided
    if (this.props.itemId) {
      this.fetchItem();
    }

    // Initialize inputs
    setTimeout(() => {
      this.buildForm();
    }, 100);
  }

  fetchItem() {
    // Assuming item.get is an asynchronous function that fetches data
    this.state.item.get(this.props.itemId).then((item) => {
      this.setState({ item:item });
    });
  }

  ItemHasObjectProperties(){
    for (const [key, value] of Object.entries(this.state.item)) {
      if (typeof value === "object") {
        return true;
      }
    }
    return false;
  }

  deleteSubItem(event){
    let id = event.target.id;
    let container = document.getElementById("container_"+id);
    container.remove();

  }

  async addSubItem(event){
    let object = await this.state.item.getSubObject();

    let body = [];

    for (const [key, value] of Object.entries(object)) {
      switch (value.type) {
        case "select":
          body.push(
            (<Select key={key} label={key} options={value.options}></Select>)
          );
          break;
        case "input":
          body.push(
            this.getInputByType(key,value.value)
          );
          break;
      
        default:
          break;
      }
    }
    body = (<div style={{display:"flex"}}>{body}</div>);

    let currentInputs = this.state.inputs;
     // Update the state correctly using setState
     this.setState((prevState) => {
      return { inputs: [...currentInputs, body] };
    });

  }

  


  getInputByType(key,value) {
      switch (typeof value) {
        case "string":
          return (
            <Input
              key={key}
              label={key}
              value={value}
              type={"text"}
            ></Input>
          );

        case "number":
          return (
            <Input
              key={key}
              label={key}
              value={value}
              type={"number"}
            ></Input> 
          );

        case "object":
          console.log(typeof value);
          let body = [];
          for (const [key2, value2] of Object.entries(value)) {
            body.push(this.getInputByType(key2,value2));
          }

          let deleteButton = null;
          if(!Array.isArray(value)){
            deleteButton = <DeleteButton id={key} onClick={this.deleteSubItem.bind(this)}></DeleteButton>
          }


          return (<div id={"container_"+key} style={{
            display: "flex",
          }} >
            {body}
            {deleteButton}
          </div>);
        default:
          break;
      }
  }


  updateInputs() {
    const { item } = this.state;
    if (!item) {
      return; // If item is undefined or null, exit early
    }


    const inputs = Object.entries(item).map(([key,value]) => {
      if (key !== "_id" && key !== "__v" ) {
        return this.getInputByType(key,value);
      }
      return null; // Return null for keys you don't want to display
    });
  
    this.setState({ inputs });
  }

  async buildForm(){
    let formStructure = await this.state.item.formDescriptor();
    console.log(formStructure)
    let body = [];

    for (const [key, value] of Object.entries(formStructure)) {
      switch (value.type) {
        case "select":
          body.push(
            (<Select key={key} label={key} options={value.options}></Select>)
          );
          break;
        case "input":
          body.push(
            this.getInputByType(key,value.value)
          );
          break;
        case "hidden":
          body.push(
            <Input type={"hidden"} label={key} value={value.value}></Input>
          );
      
        default:
          break;
      }
    }
    console.log(body);
    this.setState({inputs:body});
  }
  

  render() {
    let button = null;
    if(this.ItemHasObjectProperties()){
      button = <button onClick={this.addSubItem.bind(this)}>Add</button>
    }

    return (
      <div>
        {button}
        <form onSubmit={this.props.onSubmit}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Input type={"hidden"} label={"type"} value={this.state.item.type()}></Input>
            {this.state.inputs}
            <input
              type="submit"
              value={this.props.submitLabel}
              style={{ margin: "0.5rem", cursor: "pointer !important" }}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
