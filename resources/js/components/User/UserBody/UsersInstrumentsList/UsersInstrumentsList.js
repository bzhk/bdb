import React from "react";
import InstrumentsListItem from "./InstrumentsListItem/InstrumentsListItem";

const UsersInstrumentsList = ({ instruments, freeUpInstrument }) => {
    return (
        <div className="users-instument">
            {instruments.map(elem => {
                return (
                    <InstrumentsListItem
                        key={elem.id}
                        elem={elem}
                        freeUpInstrument={() => freeUpInstrument(elem.id)}
                    />
                );
            })}
        </div>
    );
};
export default UsersInstrumentsList;
