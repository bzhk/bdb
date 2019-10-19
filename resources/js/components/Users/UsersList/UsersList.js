import React, { useState } from "react";
import RemoveModal from "../../Helpers/RemoveModal";
import UserListItem from "./UserListItem/UserListItem";
const UsersList = ({ usersList, nextPath, getUserData, removeUser }) => {
    const [removeModal, setRemoveModal] = useState(false);
    const [removeId, setRemoveId] = useState(null);
    return (
        <div className="users-list__container">
            {removeModal && (
                <RemoveModal
                    label={"Czy chcesz usunąć użytkownika?"}
                    actionCancel={() => {
                        setRemoveModal(false);
                        setRemoveId(null);
                    }}
                    actionOK={() => {
                        removeUser(removeId);
                        setRemoveModal(false);
                    }}
                />
            )}
            {usersList.map(elem => {
                return (
                    <UserListItem
                        key={`user_${elem.id}`}
                        user={elem}
                        nextPath={() => {
                            getUserData(elem.id);
                            nextPath(`/user/${elem.id}`);
                        }}
                        removeUser={() => {
                            setRemoveId(elem.id);
                            setRemoveModal(true);
                        }}
                    />
                );
            })}
        </div>
    );
};

export default UsersList;
