import React, { useState, useContext } from "react";
import Modal from "../../globals/Modal/Modal";
import InputHook from "../../Helpers/InputHook";
import AppContext from "../../../AppContext";

const NewInstrumentModal = ({ closeModal, typeId }) => {
    const [id, setId] = useState("");
    const [note, setNote] = useState("");
    const context = useContext(AppContext);

    const createInstrument = () => {
        context
            .postRequest("/v1/instrument/new", { id, typeId, note })
            .then(resp => {
                closeModal();
                context.setMsg({
                    text: "Utworzono nowy instrument",
                    status: 1,
                    clear: true
                });
            })
            .catch(err =>
                context.setMsg({ text: err, status: 2, clear: true })
            );
    };

    return (
        <Modal>
            <button className="btn btn-danger btn-close" onClick={closeModal}>
                X
            </button>
            <div className="modal-content__container">
                <InputHook
                    label="numer katalogowy"
                    id="id"
                    type="text"
                    onChange={setId}
                />
                <InputHook
                    label="Notatka"
                    id="note"
                    type="text"
                    onChange={setNote}
                />
                <button className="btn btn-success" onClick={createInstrument}>
                    Dodaj
                </button>
            </div>
        </Modal>
    );
};

export default NewInstrumentModal;
