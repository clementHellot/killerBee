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

    componentDidMount() {
        // Call fetchFreezBe when the component mounts to load data
        this.fetchFreezBe();
        console.log('fetch');
      }

      componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.id !== prevProps.id) {
          this.fetchFreezBe();
        }
      }

    async fetchFreezBe() {
        try {
          const response = await fetch('http://localhost:3002/freezBe'); // Adjust the URL to your API endpoint
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          let data = await response.json();
            this.convertToFreezBe(data);
          this.setState({ freezBe: data }); // Update the state with the fetched ingredients
        } catch (error) {
          console.error('Error fetching freezBe:', error);
        }
      }
    
      componentDidMount() {
        this.fetchFreezBe();
      }
    
      convertToFreezBe(list = []) {
        list.forEach((element, index) => {
            list[index] = FreezBe.from_object(element);

        });
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

    async onDelete(event) {
        let freezBe = new FreezBe(event.target.id);
        await freezBe.remove();
        this.fetchFreezBe();
      }


    render() {
            return (
                <div> 
                        <Index title="Liste des FreezBe" thead={this.getTableHeaders()} 
                        data={this.state.freezBe} create={FreezBe.createLink()}  onDelete={this.onDelete.bind(this)}/> 
                </div>
                
            )
    }
}

export default FreezBePanel;