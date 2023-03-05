import React from "react";

import "./style.scss";

const InputText = ({ placeholder, onChange }) => {
    return (
        <input
            onChange={onChange}
            placeholder={placeholder}
            type="text"
        />
    );
}

export default InputText;