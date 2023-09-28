import React from "react";

import Form from "../Form.js";
import Ingredient from "../../models/Ingredient.js";
import FreezBe from "../../models/FreezBe.js";
import Procede from "../../models/Procede.js";
import Error from "../Error.js";

class CrudCreate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    getObjectFromType() {
        switch (this.props.section) {
            case "ingredient":
                return new Ingredient("ingredient", this.props.id);
            
            case "freezbe":
                return new FreezBe();
            case "procede":
                return new Procede();
            
            default:
                return null;
        }
    }

    render() {
        let error = (<div></div>);
        if(this.props.error !== "" && this.props.error !== undefined && this.props.error !== null)
        {   
            error = (<Error error={this.props.error}></Error>);
        }
        let section = this.props.section.charAt(0).toUpperCase() + this.props.section.slice(1);


        return (
            <div>
                {error}
                <h2>Créer un {section}</h2>
            <Form item={this.getObjectFromType()} submitLabel="Créer" onSubmit={this.props.onSubmit}></Form>
            </div>
        );
    }
}

export default CrudCreate;