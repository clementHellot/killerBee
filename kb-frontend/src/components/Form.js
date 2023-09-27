import React from "react";
import Input from "./form/Input";

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
      this.updateInputs();
    }, 100);
  }

  fetchItem() {
    // Assuming item.get is an asynchronous function that fetches data
    this.state.item.get(this.props.itemId).then((item) => {
      this.setState({ item:item });
    });
  }

  updateInputs() {
    const { item } = this.state;
    if (!item) {
      return; // If item is undefined or null, exit early
    }
  
    const inputs = Object.keys(item).map((key) => {
      if (key !== "_id" && key !== "__v") {
        return (
          <Input
            key={key}
            label={key}
            value={item[key]}
          ></Input>
        );
      }
      return null; // Return null for keys you don't want to display
    });
  
    this.setState({ inputs });
  }
  

  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
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
