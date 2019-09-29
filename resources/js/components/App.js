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
            alertMsg: {
                text: "",
                status: null
            },
            userData: {},
            instruments: [],
            usersList: [],
            typesList: []
        };

        this.routes = [
            {
                path: "/users",
                name: "Użytkownicy",
                Component: Users,
                sidebar: true
            },
            {
                path: "/user/:id",
                name: "Użytkownik",
                Component: User,
                sidebar: false
            },
            {
                path: "/instruments",
                name: "Instrumenty",
                Component: Instruments,
                sidebar: true
            }
        ];
    }

    componentDidMount = async () => {};

    nextPath = path => {
        history.push(path);
    };

    goBack = () => {
        history.goBack();
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

    getUsers = () => {
        this.getRequest("/v1/users")
            .then(res => {
                this.setState({ usersList: res.data.value });
            })
            .catch(this.setErrorMsg);
    };

    removeUser = id => {
        this.postRequest("/v1/user/remove", { id })
            .then(res => {
                this.getUsers();
                this.setMsg({ text: res.data.value, status: 1, clear: true });
            })
            .catch(this.setErrorMsg);
    };

    getUserData = id => {
        this.getRequest(`/v1/user/${id}`)
            .then(res => {
                this.setState({
                    userData: res.data.value
                });
            })
            .catch(err => {
                console.log(err);
            });
    };

    addInstrument = (userId, catalogId) => {
        this.postRequest("/v1/instruments/add", { userId, catalogId })
            .then(res => {
                console.log(res);
            })
            .catch(err => console.log(err));
    };

    getFreeInstruments = () => {
        this.getRequest("/v1/instruments")
            .then(res => {
                this.setState({ instruments: res.data.value });
            })
            .catch(err => console.log(err));
    };

    freeUpInstrument = catalogId => {
        this.postRequest("/v1/instrument/freeup", { catalogId })
            .then(res => console.log(res))
            .catch(err => console.log(err));
    };

    getTypes = () => {
        this.getRequest("/v1/types")
            .then(res => {
                console.log(res);
                this.setState({ typesList: res.data });
            })
            .catch(err => console.log(err));
    };

    newType = name => {
        this.postRequest("/v1/type/new", { name })
            .then(res => {
                this.setMsg({ text: res.data.value, type: 1, clear: true });
                this.getTypes();
            })
            .catch(err => {
                this.setMsg({ text: err, type: 2, clear: true });
            });
    };

    removeType = id => {
        this.postRequest("/v1/type/remove", { id })
            .then(res => {
                this.setMsg({ text: res.data.value, type: 1, clear: true });
                this.getTypes();
            })
            .catch(err => {
                this.setMsg({ text: err, type: 2, clear: true });
            });
    };

    createInstrumentModal = () => {};

    setMsg = async ({ text, status, clear }) => {
        const msg = {
            text,
            status
        };
        await this.setState({ alertMsg: msg });
        if (clear)
            setTimeout(
                () => this.setMsg({ text: "", status: null, clear: false }),
                2000
            );
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
        const {
            userData,
            alertMsg,
            instruments,
            usersList,
            typesList
        } = this.state;
        return (
            <AppContext.Provider
                value={{
                    routes: this.routes,
                    nextPath: this.nextPath,
                    goBack: this.goBack,
                    postRequest: this.postRequest,
                    getRequest: this.getRequest,
                    setMsg: this.setMsg,
                    alertMsg,
                    userData,
                    getUserData: this.getUserData,
                    freeUpInstrument: this.freeUpInstrument,
                    instruments,
                    getFreeInstruments: this.getFreeInstruments,
                    addInstrument: this.addInstrument,
                    usersList,
                    getUsers: this.getUsers,
                    removeUser: this.removeUser,
                    typesList,
                    newType: this.newType,
                    getTypes: this.getTypes,
                    removeType: this.removeType,
                    createInstrumentModal: this.createInstrumentModal
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
