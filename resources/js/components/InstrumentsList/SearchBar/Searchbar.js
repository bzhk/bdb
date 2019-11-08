import React, { useState } from "react";

const SearchBar = ({ label, filter, type, setFilter }) => {
    const [inputValue, setValue] = useState("");
    const onChange = async ev => {
        const { value } = ev.target;

        setValue(value);
        await setFilter(value, type);
        filter();
    };
    return (
        <input
            placeholder={label}
            onChange={onChange}
            value={inputValue}
            className="form-control searchbar__input"
        />
    );
};

export default SearchBar;
