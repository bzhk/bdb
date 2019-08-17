import React, { Component } from "react";
import { Router } from "react-router";
import "@babel/polyfill";
import axios from "axios";
import history from "../History";
import AppContext from "../AppContext";
import Sidebar from "./Sidebar/Sidebar";
import Body from "./Body/Body";
import Users from "./Users/Users";
import User from "./User/User";

import Instruments from "./Instruments/Instruments";

class App extends Component {
    constructor() {
        super();

        this.state = {
            errorMsg: "",
            successMsg: "",
            userData: {}
        };

        this.routes = [
            {
                path: "/users",
                name: "Users",
                Component: Users,
                sidebar: true
            },
            {
                path: "/users/:id",
                name: "User",
                Component: User,
                sidebar: false
            },
            {
                path: "/instruments",
                name: "Instruments",
                Component: Instruments,
                sidebar: true
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

    getUserData = id => {
        this.getRequest(`/v1/users/${id}`)
            .then(res => {
                this.setState({
                    userData: res.data.value
                });
            })
            .catch(err => {
                console.log(err);
            });
    };

    freeUpInstrument = (userId, instrumentId) => {
        this.postRequest("/v1/instrument/freeup", { userId, instrumentId })
            .then(res => console.log(res))
            .catch(err => console.log(err));
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
        const { userData, successMsg, errorMsg } = this.state;
        return (
            <AppContext.Provider
                value={{
                    routes: this.routes,
                    nextPath: this.nextPath,
                    postRequest: this.postRequest,
                    getRequest: this.getRequest,
                    setErrorMsg: this.setErrorMsg,
                    errorMsg,
                    setSuccessMsg: this.setSuccessMsg,
                    successMsg,
                    userData,
                    getUserData: this.getUserData,
                    freeUpInstrument: this.freeUpInstrument
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
