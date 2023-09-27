import React from "react";

import Form from "../Form.js";
import Ingredient from "../../models/Ingredient.js";

class CrudEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item : this.getObjectFromType()
        };
    }

    

    getObjectFromType() {
        switch (this.props.section) {
            case "ingredient":
                return new Ingredient("","");
                break;
            default:
                return null;
        }
    }

    



    render() {
        let section = this.props.section.charAt(0).toUpperCase() + this.props.section.slice(1);


        return (
            <div>
                <h2>Modifier un {section}</h2>
            <Form item={this.state.item} itemId={this.props.id} submitLabel='Modifier' onSubmit={this.props.onSubmit}></Form>
            </div>
        );
    }
}

export default CrudEdit;