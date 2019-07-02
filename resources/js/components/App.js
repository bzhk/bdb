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

        this.state = {
            errorMsg: "",
            successMsg: ""
        };

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
                return reject("Error with local token.");
            }
        });
    };

    setErrorMsg = async msg => {
        await this.setState({ errorMsg: msg });
        setTimeout(() => this.setState({ errorMsg: "" }, 1500));
    };

    setSuccessMsg = async msg => {
        await this.setState({ successMsg: msg });
        setTimeout(() => this.setState({ successMsg: "" }, 1500));
    };

    getRequest = async (path, headers = {}) => {
        return new Promise(async (resolve, reject) => {
            try {
                const token = await this.getToken();
                const resp = await axios.get(path, {
                    ...headers,
                    headers: {
                        "X-CSRF-TOKEN": token
                    }
                });
                return resolve(resp);
            } catch (err) {
                if (err.response) {
                    return reject(err.response.data.value);
                } else {
                    return reject(err);
                }
            }
        });
    };

    postRequest = async (path, data, headers = {}) => {
        return new Promise(async (resolve, reject) => {
            try {
                const token = await this.getToken();
                const resp = await axios.post(path, data, {
                    ...headers,
                    headers: {
                        "X-CSRF-TOKEN": token
                    }
                });
                return resolve(resp);
            } catch (err) {
                if (err.response) {
                    return reject(err.response.data.value);
                } else {
                    return reject(err);
                }
            }
        });
    };

    render() {
        return (
            <AppContext.Provider
                value={{
                    routes: this.routes,
                    nextPath: this.nextPath,
                    postRequest: this.postRequest,
                    getRequest: this.getRequest,
                    setErrorMsg: this.setErrorMsg,
                    errorMsg: this.state.errorMsg,
                    setSuccessMsg: this.setSuccessMsg,
                    successMsg: this.state.successMsg
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
