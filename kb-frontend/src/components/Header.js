import React from 'react';
import './css/Header.css';


class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        

        return (
            <header>
                <nav>
                    <h1>KillerBee</h1>

                </nav>
            </header>
        )
    }
}

export default Header;