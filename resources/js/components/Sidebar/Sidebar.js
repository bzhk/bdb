import React, { Component } from "react";
import AppContext from "../../AppContext";
import MenuItem from "./MenuItem/MenuItem";
class Sidebar extends Component{
    constructor(){
        super();
        this.state = {
            activePath: ""
        }
    }
    setActivePath = (path) => {
        this.setState({activePath: path})
    }

    render() {
        return (
           
                <div className="sidebar__container">
                    {this.context.routes.map((elem, index) => {
                        return elem.sidebar && (
                            <MenuItem
                                key={elem.path}
                                name={elem.name}
                                path={elem.path}
                                nextPath={() => {
                                    this.setActivePath(elem.path);
                                    this.context.nextPath(elem.path);
                                }}
                                activePath={this.state.activePath === elem.path}
                                
                            />
                        );
                    })}
                </div>
           
        );
    }

};
Sidebar.contextType = AppContext;
export default Sidebar;
