import React, { useState, useContext } from "react";
import InputHook from "../../Helpers/InputHook";
import AppContext from "../../../AppContext";

const AddNewUser = ({}) => {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const context = useContext(AppContext);

    const addNewUser = (name, surname) => {
        context
            .postRequest("/v1/user/new", { name, surname })
            .then(resp => {
                context.setMsg({
                    text: resp.data.value,
                    status: 1,
                    clear: true
                });
                context.getUsers();
            })
            .catch(err =>
                context.setMsg({ text: err, status: 2, clear: true })
            );
    };

    const { alertMsg } = context;
    console.log(alertMsg);

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
            {alertMsg.text && (
                <div
                    className={`alert ${
                        alertMsg.status == 1 ? "alert-success" : "alert-danger"
                    }`}
                >
                    {alertMsg.text}
                </div>
            )}
        </div>
    );
};

export default AddNewUser;
