import React, { useState, useContext } from "react";
import InputHook from "../../Helpers/InputHook";
import Modal from "../../globals/Modal/Modal";
import AppContext from "../../../AppContext";

const EditTypeModal = ({ closeModal, type, getTypes }) => {
    const context = useContext(AppContext);
    const { postRequest, setMsg } = context;

    const { name: typeName, id: typeId } = type;
    const [name, setName] = useState(typeName);

    const saveType = async () => {
        try {
            await postRequest(`/v1/type/edit/${typeId}`, {
                name: name
            });
            getTypes();
            closeModal();
        } catch (err) {
            setMsg({
                text: "Problem z zapisaniem typu",
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
                <InputHook
                    label="nazwa"
                    id="id"
                    type="text"
                    onChange={setName}
                    value={name}
                />
                <button className="btn btn-success" onClick={saveType}>
                    Zapisz
                </button>
            </div>
        </Modal>
    );
};

export default EditTypeModal;
