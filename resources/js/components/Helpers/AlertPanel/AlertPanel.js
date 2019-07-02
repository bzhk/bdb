import React, { useContext } from "react";
import AppContext from "../../../AppContext";

const AlertPanel = props => {
    const context = useContext(AppContext);
    if (context.successMsg) {
        return <Alert text={context.successMsg} className={"alert__success"} />;
    } else if (context.errorMsg) {
        return <Alert text={context.errorMsg} className={"alert__error"} />;
    } else {
        return null;
    }
};
export default AlertPanel;
