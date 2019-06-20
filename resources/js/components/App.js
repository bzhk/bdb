import React, { Component } from "react";
import { Router } from "react-router";
import "@babel/polyfill";
import axios from "axios";
import history from "../History";
import AppContext from "../AppContext";
import Sidebar from "./Sidebar/Sidebar";
import Body from "./Body/Body";
import Users from "./Users/Users";
import Instruments from "./Instruments/Instruments";

class App extends Component {
    constructor() {
        super();

        this.state = {};

        this.routes = [
            {
                path: "/users",
                name: "Users",
                Component: Users
            },
            {
                path: "/instruments",
                name: "Instruments",
                Component: Instruments
            }
        ];
    }

    componentDidMount = async () => {};

    nextPath = path => {
        history.push(path);
    };

    getToken = () => {
        return new Promise(resolve => {
            if (document.querySelector("meta[name=csrf-token]")) {
                return resolve(
                    document.querySelector("meta[name=csrf-token]").content
                );
            } else {
                return resolve("");
            }
        });
    };

    addNewUser = (name, surname) => {
        console.log(name, surname);
        this.postRequest('/user',{name, surname},(res)=>console.log(res.data))
    };

    postRequest = async (
        path,
        data,
        successCb = () => {},
        errorCb = () => {},
        finallyCb = () => {}
    ) => {
        const token = await this.getToken();
        console.log(token);
        if(!token)
        {
            console.log('empty token')
            return;
        }

        axios
            .post(path, data, {
                headers: {
                    "X-CSRF-TOKEN": token
                }
            })
            .then(successCb)
            .catch(errorCb)
            .finally(finallyCb);
    };

    render() {
        return (
            <AppContext.Provider
                value={{
                    routes: this.routes,
                    nextPath: this.nextPath,
                    addNewUser: this.addNewUser
                }}
            >
                <Router history={history}>
                    <div className="app__container">
                        <Sidebar />
                        <Body />
                    </div>
                </Router>
            </AppContext.Provider>
        );
    }
}

export default App;
