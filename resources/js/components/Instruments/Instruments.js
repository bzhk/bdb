import React, { useContext, useState, useEffect } from "react";
import Types from "./Types/Types";
import AppContext from "../../AppContext";
import NewInstrumentModal from "./NewInstrumentModal/NewInstrumentModal";
import NewType from "./Types/NewType/NewType";
import EditTypeModal from "./EditTypeModal/EditTypeModal";
import AlertPanel from "../Helpers/AlertPanel/AlertPanel";
const Instruments = ({}) => {
    const context = useContext(AppContext);
    const [newInstrumentModal, setNewInstrumentModal] = useState(false);
    const [editInstrumentTypeModal, setInstrumentTypeModal] = useState(false);
    const [typeId, setTypeId] = useState(null);
    const {
        newType,
        setMsg,
        getTypes,
        typesList,
        removeType,
        createInstrumentModal
    } = context;

    useEffect(() => {
        setMsg({ text: null, status: 404 });
        getTypes();
    }, []);

    return (
        <>
            {newInstrumentModal && typeId > -1 && (
                <NewInstrumentModal
                    closeModal={() => setNewInstrumentModal(false)}
                    typeId={typeId}
                    setTypeId={setTypeId}
                />
            )}
            {editInstrumentTypeModal && typeId > -1 && (
                <EditTypeModal
                    closeModal={() => setInstrumentTypeModal(false)}
                    type={typesList.find(elem => elem.id === typeId)}
                    getTypes={getTypes}
                />
            )}
            <div className="content__container ">
                <AlertPanel />
                <div className="row">
                    <div className="col-3">
                        <div className="content__header">Dodaj nowy typ</div>
                        <div className="widget__container">
                            <NewType createNewType={newType} />
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="content__header">Typy instrumentów</div>
                        {/* {alertMsg.text && (
                            <div
                                className={`alert ${
                                    alertMsg.status == 1
                                        ? "alert-success"
                                        : "alert-danger"
                                }`}
                            >
                                {alertMsg.text}
                            </div>
                        )} */}

                        <div className="content__body instruments__view">
                            <Types
                                typesList={typesList}
                                removeType={removeType}
                                setNewInstrumentModal={setNewInstrumentModal}
                                setTypeId={setTypeId}
                                setInstrumentTypeModal={setInstrumentTypeModal}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Instruments;
