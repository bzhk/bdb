import React, {useState} from "react";
import AddNewUser from "./AddNewUser/AddNewUser";

const Users = props => {

   

    return <div className="content__container">
        <div className="content__header">Users</div>
        <div className="content__body">
           
                <AddNewUser />
            
        </div>
    </div>
}

export default Users;