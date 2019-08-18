import React from 'react';
import NewType from "./NewType/NewType";
import TypesList from "./TypesList/TypesList";

const Types = ({newType, typesList, removeType}) => {
    return <div className="type-list__container">
        <NewType createNewType={newType}/>
        <TypesList typesList={typesList} removeType={removeType}/>
    </div>
}

export default Types;