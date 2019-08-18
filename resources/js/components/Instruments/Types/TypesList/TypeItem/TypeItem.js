import React from "react";

const TypeItem = ({ elem,removeType }) => {
    return (
        <div className="type-item__container">
            {elem.name}
            <div className="type-item__btns">
                <button className="btn btn-primary">Edytuj</button>
                <button className="btn btn-success">Nowy Instrument</button>
                <button className="btn btn-danger" onClick={removeType}>Usuń Typ</button>
            </div>
        </div>
    );
};

export default TypeItem;
