import React, { Component } from "react";
import AppContext from "../../AppContext";
import AlertPanel from "../Helpers/AlertPanel/AlertPanel";
import AddNewUser from "./AddNewUser/AddNewUser";
import UsersList from "./UsersList/UsersList";

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usersList: []
        };
    }

    componentDidMount = () => {
        this.getUsers();
    }
    
    getUsers = () => {
        this.context
            .getRequest("/users_list")
            .then(res => this.setState({ usersList: res.data.value }))
            .catch(this.context.setErrorMsg);
    };

    render() {
        return (
            <div className="content__container">
                <div className="content__header">Users</div>
                <div className="content__body">
                    <AlertPanel />
                    <AddNewUser />
                    <UsersList usersList={this.state.usersList} />
                </div>
            </div>
        );
    }
}
Users.contextType = AppContext;
export default Users;
