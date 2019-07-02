import React, { useState, useContext } from "react";
import InputHook from "../../Helpers/InputHook";
import AppContext from "../../../AppContext";

const AddNewUser = props => {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const context = useContext(AppContext);

    const addNewUser = (name, surname) => {
        context
            .postRequest("/user", { name, surname })
            .then(resp => {
                try {
                    context.setSuccessMsg(resp.data.value);
                } catch (err) {
                    context.setSuccessMsg("Done.");
                }
            })
            .catch(err => context.setErrorMsg(err));
    };

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
                    addNewUser(name, surname);
                }}
            >
                Dodaj
            </button>
        </div>
    );
};

export default AddNewUser;
