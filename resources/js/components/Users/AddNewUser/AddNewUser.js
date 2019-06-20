import React, { useState, useContext } from "react";
import InputHook from "../../Helpers/InputHook";
import AppContext from "../../../AppContext";

const AddNewUser = props => {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const context = useContext(AppContext);
    return (
        <div className="widget__container">
            <InputHook label="Imię" id="name" type="text" onChange={setName} />
            <InputHook
                label="Nazwisko"
                id="surname"
                type="text"
                onChange={setSurname}
            />
            <button
                className="btn btn-success"
                onClick={() => {
                    context.addNewUser(name, surname);
                }}
            >
                Dodaj
            </button>
        </div>
    );
};

export default AddNewUser;
