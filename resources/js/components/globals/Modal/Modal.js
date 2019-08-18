import React from "react";

const Modal = ({ children }) => {
    
    return (
        <div className="modal__wrapper">
            <div className="modal__overlay" />
            <div className="modal__container">{children}</div>
        </div>
    );
};

export default Modal;
