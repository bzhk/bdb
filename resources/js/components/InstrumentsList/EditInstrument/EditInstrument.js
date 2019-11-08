import React, { useState, useContext } from "react";
import InputHook from "../../Helpers/InputHook";
import SelectHook from "../../Helpers/SelectHook";
import Modal from "../../globals/Modal/Modal";
import AppContext from "../../../AppContext";

const EditInstrument = ({ closeModal, instrumentForEdit, getInstruments }) => {
    const context = useContext(AppContext);
    const { usersList, postRequest } = context;

    const { id, note, catalog_id, user_id, name } = instrumentForEdit;
    const [noteContent, setNoteContent] = useState(note);
    const [catalogId, setCatalogId] = useState(catalog_id);
    const [user, setUser] = useState(user_id);

    const saveInstrument = async () => {
        try {
            await postRequest(`/v1/instrument/save/${id}`, {
                note: noteContent,
                catalog_id: catalogId,
                user_id: user
            });
            getInstruments();
            closeModal();
        } catch (err) {
            setMsg({
                text: "Problem z zapisaniem instrumentu",
                status: 2,
                clear: true
            });
        }
    };

    return (
        <Modal>
            <button className="btn btn-danger btn-close" onClick={closeModal}>
                X
            </button>
            <div className="modal-content__container">
                <h4>{name}</h4>
                <InputHook
                    label="numer katalogowy"
                    id="id"
                    type="text"
                    onChange={setCatalogId}
                    value={catalogId}
                />
                <InputHook
                    label="Notatka"
                    id="note"
                    type="text"
                    onChange={setNoteContent}
                    value={noteContent}
                />
                <SelectHook
                    label="Użytkownik"
                    id="user"
                    onChange={setUser}
                    value={user}
                    options={usersList}
                />
                <button className="btn btn-success" onClick={saveInstrument}>
                    Zapisz
                </button>
            </div>
        </Modal>
    );
};

export default EditInstrument;
