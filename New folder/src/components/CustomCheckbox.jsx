import React from "react";
import markedCheckbox from "../assets/svg/markedcheckmark.svg";
import unmarkedCheckbox from "../assets/svg/unmarkedcheckmark.svg";
import greyCheckbox from "../assets/svg/grecheckbox.svg";

const CustomCheckbox = ({
  checked,
  onChange,
  name,
  value,
  label,
  className = "",
  disabled = false,
  isReportRoute = false,
}) => {
  const handleClick = (e) => {
    if (disabled) {
      e.preventDefault();
      return;
    }
    if (onChange) {
      onChange(e);
    }
  };

  const getCheckboxIcon = () => {
    if (checked && (disabled || isReportRoute)) {
      // Use grey checkbox only for selected items when disabled or in report route
      return greyCheckbox;
    }
    // Normal behavior for all other cases
    return checked ? markedCheckbox : unmarkedCheckbox;
  };

  return (
    <label
      className={`custom-checkbox-container ${className} ${
        disabled ? "disabled" : ""
      }`}
    >
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={disabled ? undefined : onChange}
        className="custom-checkbox-input"
        disabled={disabled}
      />
      <img
        src={getCheckboxIcon()}
        alt={checked ? "Checked" : "Unchecked"}
        className="custom-checkbox-icon"
        onClick={handleClick}
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
