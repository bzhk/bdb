import React from "react";

const Instrument = ({
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
                <button className="btn btn-info">Edytuj</button>
            </td>
        </tr>
    );
};

export default Instrument;
