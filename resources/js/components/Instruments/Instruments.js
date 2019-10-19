import React, { useContext, useState, useEffect } from "react";
import Types from "./Types/Types";
import AppContext from "../../AppContext";
import NewInstrumentModal from "./NewInstrumentModal/NewInstrumentModal";

const Instruments = ({}) => {
    const context = useContext(AppContext);
    const [newInstrumentModal, setNewInstrumentModal] = useState(false);
    const [typeId, setTypeId] = useState(null);
    const {
        newType,
        alertMsg,
        getTypes,
        typesList,
        removeType,
        createInstrumentModal
    } = context;

    useEffect(() => {
        getTypes();
    }, []);
    return (
        <div className="content__container ">
            <div className="content__header">Instrumenty</div>
            {alertMsg.text && (
                <div
                    className={`alert ${
                        alertMsg.status == 1 ? "alert-success" : "alert-danger"
                    }`}
                >
                    {alertMsg.text}
                </div>
            )}
            {newInstrumentModal && typeId > -1 && (
                <NewInstrumentModal
                    closeModal={() => setNewInstrumentModal(false)}
                    typeId={typeId}
                    setTypeId={setTypeId}
                />
            )}
            <div className="content__body instruments__view">
                <Types
                    newType={newType}
                    typesList={typesList}
                    removeType={removeType}
                    setNewInstrumentModal={setNewInstrumentModal}
                    setTypeId={setTypeId}
                />
            </div>
        </div>
    );
};

export default Instruments;
