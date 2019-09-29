import React from "react";
import NewType from "./NewType/NewType";
import TypesList from "./TypesList/TypesList";

const Types = ({
    newType,
    typesList,
    removeType,
    setNewInstrumentModal,
    setTypeId
}) => {
    return (
        <div className="type-list__container">
            <NewType createNewType={newType} />
            <TypesList
                typesList={typesList}
                removeType={removeType}
                setNewInstrumentModal={setNewInstrumentModal}
                setTypeId={setTypeId}
            />
        </div>
    );
};

export default Types;
