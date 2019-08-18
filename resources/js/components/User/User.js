import React, { useContext, useState } from "react";
import UserHeader from "./UserHeader/UserHeader";
import UserBody from "./UserBody/UserBody";
import AppContext from "../../AppContext";
import FreeInstrumentsList from "./FreeInstrumentsList/FreeInstrumentsList";
const User = ({ match }) => {
    const context = useContext(AppContext);
    const {
        getUserData,
        userData,
        freeUpInstrument,
        instruments,
        getFreeInstruments,
        addInstrument,
        goBack
    } = context;

    const [modal, setModal] = useState(false);
    if (!Object.keys(userData).length) {
        getUserData(match.params.id);
        return <div>Loading...</div>;
    }


    return (
        <div className="widget__container">
            {modal && (
                <FreeInstrumentsList
                    closeModal={() => setModal(false)}
                    instruments={instruments}
                    addInstrument={instrumentCatalogId => {
                        addInstrument(userData.id, instrumentCatalogId);
                        setModal(false);
                    }}
                />
            )}
            <UserHeader userData={userData} goBack={goBack}/>
            <UserBody
                openModal={async () => {
                    await getFreeInstruments();
                    setModal(true);
                }}
                instruments={userData.instruments}
                freeUpInstrument={freeUpInstrument}
            />
        </div>
    );
};

export default User;
