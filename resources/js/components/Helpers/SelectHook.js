import React from "react";

const SelectHook = props => {
    return (
        <div className="form-group">
            <label htmlFor={props.id}>{props.label}</label>
            <select
                id={props.id}
                className="form-control"
                value={props.value || ""}
                onChange={ev => {
                    props.onChange(ev.target.value);
                }}
            >
                <option key={"null"} value={""} />
                {props.options.map(elem => {
                    return (
                        <option key={elem.id} value={elem.id}>
                            {elem.name} {elem.surname}
                        </option>
                    );
                })}
            </select>
        </div>
    );
};
export default SelectHook;
