import React from "react";
import TypeItem from "./TypeItem/TypeItem";

const TypesList = ({
    typesList,
    removeType,
    setNewInstrumentModal,
    setTypeId
}) => {
    return (
        <div>
            {typesList.map(elem => {
                return (
                    <TypeItem
                        key={elem.id}
                        elem={elem}
                        removeType={() => removeType(elem.id)}
                        setNewInstrumentModal={() => {
                            setTypeId(elem.id);
                            setNewInstrumentModal(true);
                        }}
                    />
                );
            })}
        </div>
    );
};

export default TypesList;
