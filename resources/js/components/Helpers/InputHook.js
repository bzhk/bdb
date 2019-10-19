import React, { useState } from "react";

const InputHook = props => {
    const [text, setText] = useState(props.value || "");
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
                    setText(props.text);
                    props.onChange(ev.target.value);
                }}
                value={text}
            />
        </div>
    );
};
export default InputHook;
