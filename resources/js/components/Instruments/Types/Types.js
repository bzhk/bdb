import React from "react";

import TypesList from "./TypesList/TypesList";

const Types = ({
    typesList,
    removeType,
    setNewInstrumentModal,
    setTypeId,
    setInstrumentTypeModal
}) => {
    return (
        <div className="type-list__container">
            <TypesList
                typesList={typesList}
                removeType={removeType}
                setNewInstrumentModal={setNewInstrumentModal}
                setTypeId={setTypeId}
                setInstrumentTypeModal={setInstrumentTypeModal}
            />
        </div>
    );
};

export default Types;
