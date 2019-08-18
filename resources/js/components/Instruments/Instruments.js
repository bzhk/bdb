import React,{useContext} from "react";
import Types from "./Types/Types";
import InstrumentsList from "./InstrumentsList/InstrumentsList";
import AppContext from "../../AppContext";

const Instruments = ({}) => {
    const context = useContext(AppContext);
    const {newType, alertMsg,getTypes,typesList, removeType} = context;
    
    if(!typesList.length){
        getTypes();
        return null;
    }
    return (
        <div className="content__container ">
            <div className="content__header">Instrumenty</div>
            {alertMsg.text && <div className={`alert ${alertMsg.status == 1 ? 'alert-success' : 'alert-danger'}`}>{alertMsg.text}</div>}
            <div className="content__body instruments__view">
            <InstrumentsList />
                <Types newType={newType} typesList={typesList} removeType={removeType}/>
                
            </div>
        </div>
    );
};

export default Instruments;
