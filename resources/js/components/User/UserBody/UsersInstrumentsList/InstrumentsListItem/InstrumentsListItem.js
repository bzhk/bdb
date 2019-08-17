import React from "react";
const InstrumentsListItem = ({ elem, freeUpInstrument }) => {
    return (
        <div className="instruments-item__container">
            <div>
                {elem.id} - {elem.instruments.catalog_id} -{" "}
                {elem.instruments.name.name}
            </div>

            <div>
                <button className="btn btn-danger" onClick={freeUpInstrument}>Usuń</button>
            </div>
        </div>
    );
};
export default InstrumentsListItem;
