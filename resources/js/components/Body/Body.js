import React, {useContext} from 'react';
import {Switch, Route } from 'react-router-dom'

import AppContext from "../../AppContext";
const Body = props => {
    const context = useContext(AppContext);
    return <div className="body__container">
        <Switch>
            {context.routes.map((elem, index) => {
               
                const {name, path, Component, sidebar} = elem;
                return <Route exact key={name} path={path} component={Component} />                
                       
            })}
        </Switch>
    </div>
}

export default Body;