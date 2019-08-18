import React from 'react';
import TypeItem from "./TypeItem/TypeItem";

const TypesList = ({typesList, removeType}) => {
    return <div>{typesList.map(elem => {
        return <TypeItem key={elem.id} elem={elem} removeType={()=>removeType(elem.id)}/>
    })}</div>
}

export default TypesList;