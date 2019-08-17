import React, { useContext } from "react";
import UserHeader from "./UserHeader/UserHeader";
import UserBody from "./UserBody/UserBody";
import AppContext from "../../AppContext";

const User = ({ match }) => {
    const context = useContext(AppContext);
    const { getUserData, userData, freeUpInstrument } = context;
    if (!Object.keys(userData).length) {
        getUserData(match.params.id);
        return <div>Loading...</div>;
    }

    console.log(userData);

    return (
        <div className="widget__container">
            <UserHeader userData={userData} />
            <UserBody
                instruments={userData.users_instruments}
                freeUpInstrument={instrument_id =>
                    freeUpInstrument(userData.id, instrument_id)
                }
            />
        </div>
    );
};

export default User;
