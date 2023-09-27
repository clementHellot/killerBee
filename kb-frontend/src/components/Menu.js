import React from "react";
import MenuItem from "./MenuItem.js";
import "./css/Menu.css";





class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        

        const menuItems = this.props.list.map((menuItem, index) => (
            <React.Fragment key={menuItem.name}>
              <MenuItem
                name={menuItem.name}
                link={menuItem.link}
                icon={menuItem.icon}
              />
              {index + 1 < this.props.list.length && <hr />}
            </React.Fragment>
          ));

          

        return <div className="Menu">
            {menuItems}
        </div>;
    }
}

export default Menu;