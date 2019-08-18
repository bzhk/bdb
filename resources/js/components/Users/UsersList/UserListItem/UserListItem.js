import React from "react";

const UserListItem = ({ user, nextPath,removeUser }) => {
    return (
        <div className="user__container">
            <div>
                {user.id} - {user.name} {user.surname}
            </div>
            <div>
                <button className="btn btn-primary" onClick={nextPath}>
                    Szczegóły
                </button>
                <button className="btn btn-danger" onClick={removeUser}>
                    Usuń
                </button>
            </div>
        </div>
    );
};

export default UserListItem;
