import React, { Component } from "react";
import AppContext from "../../AppContext";
import AlertPanel from "../Helpers/AlertPanel/AlertPanel";
import AddNewUser from "./AddNewUser/AddNewUser";
import UsersList from "./UsersList/UsersList";

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount = () => {
        this.context.setMsg({ text: null, status: 404 });

        this.context.getUsers();
    };

    render() {
        const { nextPath, getUserData, usersList, removeUser } = this.context;
        return (
            <div className="content__container">
                <div className="content__body">
                    <AlertPanel />
                    <div className="row">
                        <div className="col-3">
                            <div className="content__header">
                                Dodaj nową osobę
                            </div>
                            <AddNewUser />
                        </div>
                        <div className="col-9">
                            <div className="content__header">Lista</div>
                            <UsersList
                                usersList={usersList}
                                nextPath={nextPath}
                                getUserData={getUserData}
                                removeUser={removeUser}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
Users.contextType = AppContext;
export default Users;
