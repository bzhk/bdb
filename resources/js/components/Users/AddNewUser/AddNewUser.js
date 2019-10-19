import React, { useState, useContext } from "react";
import InputHook from "../../Helpers/InputHook";
import AppContext from "../../../AppContext";

const AddNewUser = ({}) => {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const context = useContext(AppContext);

    const addNewUser = (name, surname) => {
        if (!name || !surname) {
            context.setMsg({
                text: "Brak imienia lub naziwska",
                status: 2,
                clear: true
            });
            return;
        }
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

    return (
        <div className="widget__container">
            <InputHook
                label="Imię"
                id="name"
                type="text"
                onChange={setName}
                value={name}
            />
            <InputHook
                label="Nazwisko"
                id="surname"
                type="text"
                onChange={setSurname}
                value={surname}
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
