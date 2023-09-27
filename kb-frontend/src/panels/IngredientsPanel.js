import React from 'react';
import Header from '../components/Header.js'
import Menu from '../components/Menu.js'

import Index from '../components/crud/Index.js';
import Ingredient from '../models/Ingredient.js';


class IngredientsPanel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ingredients: []
        };
    }

    async fetchIngredients() {
        try {
          const response = await fetch('http://localhost:3005/ingredient'); // Adjust the URL to your API endpoint
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          let data = await response.json();
          this.convertToIngredient(data); 

          this.setState({ ingredients: data }); // Update the state with the fetched ingredients
        } catch (error) {
          console.error('Error fetching ingredients:', error);
        }
      }
    
      componentDidMount() {
        // Call fetchIngredients when the component mounts to load data
        this.fetchIngredients();
        console.log('fetch');
      }

      componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.id !== prevProps.id) {
          this.fetchIngredients();
        }
      }
    
      convertToIngredient(list = []) {
        list.forEach((element, index) => {
            list[index] = Ingredient.from_object(element);

        });
      }


    getTableHeaders() {
        let headers = [];
        let ingredient  = new Ingredient("","");
        for (const [key, value] of Object.entries(ingredient)) {
            if(key !== '_id' && key !== '__v')
            {
                headers.push(key);
            }
        }
        return headers;
    }

    async onDelete(event) {
      let ingredient = new Ingredient(event.target.id);
      await ingredient.remove();
      this.fetchIngredients();
    }
    

    render() {
        return (
            <div> 
                    <Index title="Liste des Ingredients" thead={this.getTableHeaders()} 
                    data={this.state.ingredients} create={Ingredient.createLink()}  onDelete={this.onDelete.bind(this)}/> 
            </div>
            
        )
    }
}

export default IngredientsPanel;