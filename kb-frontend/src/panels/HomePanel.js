import React from 'react';
import Header from '../components/Header.js'
import Menu from '../components/Menu.js'

import Index from '../components/crud/Index.js';


class HomePanel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div> 
                <p>Welcome to killerBee intranet</p>
            </div>
            
        )
    }
}

export default HomePanel;