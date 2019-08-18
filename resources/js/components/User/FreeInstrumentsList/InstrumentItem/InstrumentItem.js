import React from "react";

const InstrumentItem = ({ elem, addInstrument }) => {
    return (
        <div>
            <div>
                {elem.name.name} - {elem.catalog_id}
            </div>
            <button className="btn btn-info" onClick={addInstrument}>
                Dodaj
            </button>
        </div>
    );
};

export default InstrumentItem;
