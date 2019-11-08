import React, { useState } from "react";
import TypeItem from "./TypeItem/TypeItem";
import RemoveModal from "../../../Helpers/RemoveModal";
const TypesList = ({
    typesList,
    removeType,
    setNewInstrumentModal,
    setInstrumentTypeModal,
    setTypeId
}) => {
    const [removeModal, setRemoveModal] = useState(false);
    const [removeId, setRemoveId] = useState(null);
    return (
        <div>
            {removeModal && (
                <RemoveModal
                    label={"Czy chcesz usunąć typ instrumentu?"}
                    actionCancel={() => {
                        setRemoveModal(false);
                        setRemoveId(null);
                    }}
                    actionOK={() => {
                        removeType(removeId);
                        setRemoveModal(false);
                    }}
                />
            )}
            {typesList.length
                ? typesList.map(elem => {
                      return (
                          <TypeItem
                              key={elem.id}
                              elem={elem}
                              removeType={() => {
                                  setRemoveId(elem.id);
                                  setRemoveModal(true);
                              }}
                              setNewInstrumentModal={() => {
                                  setTypeId(elem.id);
                                  setNewInstrumentModal(true);
                              }}
                              setInstrumentTypeModal={() => {
                                  setTypeId(elem.id);
                                  setInstrumentTypeModal(true);
                              }}
                          />
                      );
                  })
                : null}
        </div>
    );
};

export default TypesList;
