import React, { useContext } from "react";
import AppContext from "../../../AppContext";
import Alert from "./Alert";
const AlertPanel = props => {
    const context = useContext(AppContext);
    const { alertMsg } = context;

    if (alertMsg.status === 1) {
        return <Alert text={alertMsg.text} className={"alert alert-success"} />;
    } else if (alertMsg.status === 2) {
        return <Alert text={alertMsg.text} className={"alert alert-danger"} />;
    } else {
        return null;
    }
};
export default AlertPanel;
