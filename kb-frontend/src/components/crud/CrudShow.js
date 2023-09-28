import { type } from '@testing-library/user-event/dist/type';
import React, { Component } from 'react';

import Ingredient from '../../models/Ingredient';
import FreezBe from '../../models/FreezBe';
import Procede from '../../models/Procede';

import InlineTable from './InlineTable';

class CrudShow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item : this.getObjectFromType()
        };
        this.fetchItem();
    }

    async fetchItem(){
        let item = await this.state.item.get(this.props.id);
        this.setState({item : item});
    }

    getObjectFromType(){
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
        

        let section = this.props.section.charAt(0).toUpperCase() + this.props.section.slice(1);


        return (
            <div>
                <h2>{section}</h2>
                <InlineTable item={this.state.item}></InlineTable>
            </div>
        );
    }
    }

export default CrudShow;