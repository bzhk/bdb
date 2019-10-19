import React, { useState } from "react";

const InputHook = props => {
    return (
        <div className="form-group">
            <label htmlFor={props.id}>{props.label}</label>
            <input
                type={props.type}
                required={props.required}
                className="form-control"
                id={props.id}
                placeholder={props.placeholder}
                onChange={ev => {
                    props.onChange(ev.target.value);
                }}
                value={props.value}
            />
        </div>
    );
};
export default InputHook;
