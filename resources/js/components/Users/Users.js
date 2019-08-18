import React, { Component } from "react";
import AppContext from "../../AppContext";
import AlertPanel from "../Helpers/AlertPanel/AlertPanel";
import AddNewUser from "./AddNewUser/AddNewUser";
import UsersList from "./UsersList/UsersList";

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
          
        };
    }

    componentDidMount = () => {
        this.context.getUsers();
    };

    render() {
        const { nextPath, getUserData,usersList } = this.context;
        return (
            <div className="content__container">
                <div className="content__header">Users</div>
                <div className="content__body">
                    <AlertPanel />
                    <AddNewUser />
                    <UsersList
                        usersList={usersList}
                        nextPath={nextPath}
                        getUserData={getUserData}
                    />
                </div>
            </div>
        );
    }
}
Users.contextType = AppContext;
export default Users;
