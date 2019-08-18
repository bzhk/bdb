import React from "react";
import UserListItem from "./UserListItem/UserListItem";
const UsersList = ({ usersList, nextPath, getUserData, removeUser }) => {
    return (
        <div className="users-list__container">
            {usersList.map(elem => {
                return (
                    <UserListItem
                        key={`user_${elem.id}`}
                        user={elem}
                        nextPath={() => {
                            getUserData(elem.id);
                            nextPath(`/user/${elem.id}`);
                        }}
                        removeUser={() => removeUser(elem.id)}
                    />
                );
            })}
        </div>
    );
};

export default UsersList;
