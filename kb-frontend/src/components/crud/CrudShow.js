import { type } from '@testing-library/user-event/dist/type';
import React, { Component } from 'react';
import Ingredient from '../../models/Ingredient';

import InlineTable from './InlineTable';

class CrudShow extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    getObjectFromType(){
        switch (this.props.section) {
            case "ingredient":
                return new Ingredient("ingredient", this.props.id);
            default:
                return null;
    }
}
    
    render() {
        let item = this.getObjectFromType();
        item.get(this.props.id);

        let section = this.props.section.charAt(0).toUpperCase() + this.props.section.slice(1);


        return (
            <div>
                <h2>{section}</h2>
                <InlineTable item={item}></InlineTable>
            </div>
        );
    }
    }

export default CrudShow;