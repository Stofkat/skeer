import React from "react";

import "./style.scss";

const Button = ({ label, onClick, disabled, secondary }) => {
    return (
        <div className={`button
        ${disabled ? " disabled" : ""}
        ${secondary ? " secondary" : ""}
        `} onClick={onClick}>
            <span className="label">{label}</span>
        </div>
    );
}

export default Button;