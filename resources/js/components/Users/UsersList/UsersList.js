import React from "react";
import UserListItem from "./UserListItem/UserListItem";
const UsersList = props => {
    return <div>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Imie</th>
                    <th>Nazwisko</th>
                    <th>Instrument</th>
                    <th>Nr kat.</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {props.usersList.map((elem) => { 
                    return <UserListItem key={`user_${elem.id}`} user={elem} />
                })}
            </tbody>
        </table>
    </div>;
};

export default UsersList;
