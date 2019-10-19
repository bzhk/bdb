import React from "react";

import Modal from "../globals/Modal/Modal";

const RemoveModal = ({ actionOK, actionCancel, label }) => {
    return (
        <Modal>
            <div>{label}</div>
            <div>
                <button className="btn btn-success" onClick={actionOK}>
                    OK
                </button>
                <button className="btn btn-danger" onClick={actionCancel}>
                    Cancel
                </button>
            </div>
        </Modal>
    );
};

export default RemoveModal;
