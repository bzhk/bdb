import React from 'react';
import RemoveInstrument from "./RemoveInstrument";
import AddNewInstrument from "./AddNewInstrument";
const InstrumentAction = props=> {
    return props.catalogNo ? <RemoveInstrument /> : <AddNewInstrument />;
}

export default InstrumentAction;