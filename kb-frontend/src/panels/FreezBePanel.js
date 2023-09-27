import React from 'react';
import Header from '../components/Header.js'
import Menu from '../components/Menu.js'

import Index from '../components/crud/Index.js';
import FreezBe from '../models/FreezBe.js';

class FreezBePanel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            freezBe: []
        };
    }

    async fetchFreezBe() {
        try {
          const response = await fetch('http://localhost:3002/freezBe'); // Adjust the URL to your API endpoint
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          this.setState({ freezBe: data }); // Update the state with the fetched ingredients
        } catch (error) {
          console.error('Error fetching freezBe:', error);
        }
      }
    
      componentDidMount() {
        this.fetchFreezBe();
      }
    

    getTableHeaders() {
        let headers = [];
        let freezBe  = new FreezBe("","");
        for (const [key, value] of Object.entries(freezBe)) {
            if(key !== '_id' && key !== '__v')
            {
                headers.push(key);
            }
        }
        return headers;
    }

    getTableBody(list = []) {
        let body = [];

        for (const [key, value] of Object.entries(list)) {
            let row = [];
            for (const [key2, value2] of Object.entries(value)) {
                if(key2 !== '_id' && key2 !== '__v')
                {
                    row.push(value2);
                }
            }
            body.push(row);
        }
        return body;
    }

    render() {
        return (
            <div> 
                    <Index title="Liste des FreezBe" thead={this.getTableHeaders()} tbody={this.getTableBody(this.state.freezBe)}  /> 
            </div>
            
        )
    }
}

export default FreezBePanel;