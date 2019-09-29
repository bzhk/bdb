import React, { useState } from "react";

const NewType = ({ createNewType }) => {
    const [newType, setNewType] = useState("");

    return (
        <div className="type-form-add__container">
            <div className="form-group">
                <label htmlFor="new-type">Dodaj nowy typ</label>
                <input
                    type="text"
                    className="form-control"
                    id="new-type"
                    onChange={ev => {
                        setNewType(ev.target.value);
                    }}
                    value={newType}
                />
            </div>
            <button
                className="btn btn-success"
                onClick={() => createNewType(newType)}
            >
                Utwórz
            </button>
        </div>
    );
};

export default NewType;
