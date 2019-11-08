import React from "react";
const InstrumentsListItem = ({ elem, freeUpInstrument }) => {
    return (
        <tr>
            <td>{elem.id}</td>
            <td>{elem.catalog_id}</td>
            <td>{elem.name.name}</td>
            <td>
                <button className="btn btn-danger" onClick={freeUpInstrument}>
                    Usuń
                </button>
            </td>
        </tr>
    );
};
export default InstrumentsListItem;
