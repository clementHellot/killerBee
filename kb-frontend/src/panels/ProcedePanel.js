import React from 'react';
import Header from '../components/Header.js'
import Menu from '../components/Menu.js'

import Index from '../components/crud/Index.js';
import Procede from '../models/Procede.js';

class ProcedePanel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            procede: []
        };
    }

    componentDidMount() {
        // Call fetchProcede when the component mounts to load data
        this.fetchProcede();
        console.log('fetch');
      }

      componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.id !== prevProps.id) {
          this.fetchProcede();
        }
      }

    async fetchProcede() {
        try {
          const response = await fetch('http://localhost:3010/procede'); // Adjust the URL to your API endpoint
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          let data = await response.json();
            this.convertToProcede(data);
          this.setState({ procede: data }); // Update the state with the fetched ingredients
        } catch (error) {
          console.error('Error fetching procede:', error);
        }
      }
    
      componentDidMount() {
        this.fetchProcede();
      }
    
      convertToProcede(list = []) {
        list.forEach((element, index) => {
            list[index] = Procede.from_object(element);

        });
      }

    getTableHeaders() {
        let headers = [];
        let procede  = new Procede("","");
        for (const [key, value] of Object.entries(procede)) {
            if(key !== '_id' && key !== '__v')
            {
                headers.push(key);
            }
        }
        return headers;
    }

    async onDelete(event) {
        let procede = new Procede(event.target.id);
        await procede.remove();
        this.fetchProcede();
      }


    render() {
            return (
                <div> 
                        <Index title="Liste des Procede" thead={this.getTableHeaders()} 
                        data={this.state.procede} create={Procede.createLink()}  onDelete={this.onDelete.bind(this)}/> 
                </div>
                
            )
    }
}

export default ProcedePanel;