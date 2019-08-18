import React from "react";

const UserListItem = ({ user, nextPath }) => {
    return (
        <div className="user__container">
            <div>
                {user.id} - {user.name} {user.surname}
            </div>
            <div>
                <button className="btn btn-primary" onClick={nextPath}>
                    Szczegóły
                </button>
                <button className="btn btn-danger">
                    Usuń
                </button>
            </div>
        </div>
    );
};

export default UserListItem;
