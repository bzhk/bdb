import React from "react";

const UserHeader = ({ userData, goBack }) => {
    const { id, name, surname } = userData;
    return (
        <div className="user-header__container">
            <button className="btn btn-primary" onClick={goBack}>
                Wstecz
            </button>
            {id}: {name} {surname}
        </div>
    );
};

export default UserHeader;
