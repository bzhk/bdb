import React, { useState } from "react";

const NewType = ({ createNewType }) => {
    const [newType, setNewType] = useState("");

    return (
        <div className="type-form-add__container">
            <div className="form-group">
                <label htmlFor="new-type">Nazwa typu</label>
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
                Dodaj
            </button>
        </div>
    );
};

export default NewType;
