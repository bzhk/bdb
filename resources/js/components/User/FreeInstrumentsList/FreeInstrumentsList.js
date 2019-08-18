import React from "react";
import Modal from "../../globals/Modal/Modal";
import InstrumentItem from "./InstrumentItem/InstrumentItem";

const FreeInstrumentsList = ({ instruments, closeModal, addInstrument }) => {
    return (
        <Modal>
            <button className="btn btn-danger" onClick={closeModal}>
                X
            </button>
            {instruments.map(elem => {
                return (
                    <InstrumentItem
                        key={elem.id}
                        elem={elem}
                        addInstrument={() => addInstrument(elem.catalog_id)}
                    />
                );
            })}
        </Modal>
    );
};

export default FreeInstrumentsList;
