import React from "react";
import markedCheckbox from "../assets/svg/markedcheckmark.svg";
import unmarkedCheckbox from "../assets/svg/unmarkedcheckmark.svg";

const CustomCheckbox = ({
  checked,
  onChange,
  name,
  value,
  label,
  className = "",
}) => {
  return (
    <label className={`custom-checkbox-container ${className}`}>
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="custom-checkbox-input"
      />
      <img
        src={checked ? markedCheckbox : unmarkedCheckbox}
        alt={checked ? "Checked" : "Unchecked"}
        className="custom-checkbox-icon"
      />
      <span
        className={`custom-checkbox-label ${checked ? "checked" : "unchecked"}`}
      >
        {label}
      </span>
    </label>
  );
};

export default CustomCheckbox;
