import React from "react";
import InstrumentAction from "./InstrumentAction/InstrumentAction";
const UserListItem = props => {
    const instrument = props.user.users_instruments ? props.user.users_instruments.instruments.name.name: "";
    const catalogNo = props.user.users_instruments ? props.user.users_instruments.instruments.catalog_id: "";
    return (
        <tr>
            <td>{props.user.id}</td>
            <td>{props.user.name}</td>
            <td>{props.user.surname}</td>
            <td>{instrument}</td>
            <td>{catalogNo}</td>
            <td><InstrumentAction catalogNo={catalogNo}/></td>
            <td><button className="btn btn-info">Historia</button></td>
        </tr>
    );
};

export default UserListItem;
