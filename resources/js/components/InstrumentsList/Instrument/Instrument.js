import React from "react";

const Instrument = ({
    removeInstrument,
    editInstrument,
    elem: { id, catalog_id, user, name, archive, note }
}) => {
    return (
        <tr className="instrument-content__container">
            <td>{id}</td>
            {/* <td>{archive}</td> */}
            <td>{name}</td>
            <td>{catalog_id}</td>
            <td>{user}</td>

            <td>{note}</td>
            <td>
                <button className="btn btn-info" onClick={editInstrument}>
                    Edytuj
                </button>
                <button
                    data-id={id}
                    className="btn btn-danger"
                    onClick={removeInstrument}
                >
                    Usuń
                </button>
            </td>
        </tr>
    );
};

export default Instrument;
