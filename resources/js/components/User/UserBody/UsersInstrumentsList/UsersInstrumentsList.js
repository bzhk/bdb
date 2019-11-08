import React from "react";
import InstrumentsListItem from "./InstrumentsListItem/InstrumentsListItem";

const UsersInstrumentsList = ({ instruments, freeUpInstrument }) => {
    return (
        <div className="users-instument">
            <table className="table">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>numer katalogowy</th>
                        <th>typ</th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                    {instruments.map(elem => {
                        return (
                            <InstrumentsListItem
                                key={elem.id}
                                elem={elem}
                                freeUpInstrument={() =>
                                    freeUpInstrument(elem.catalog_id)
                                }
                            />
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};
export default UsersInstrumentsList;
