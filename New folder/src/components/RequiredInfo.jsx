import React from "react";
import "../styles/RequiredInfo.css";
import ClipboardIcon from "../assets/svg/clipboardicon.svg";

const RequiredInfo = ({ onClick, className = "" }) => {
  return (
    <div className={`required-info ${className}`} onClick={onClick}>
      <img
        src={ClipboardIcon}
        alt="Clipboard Icon"
        className="clipboard-icon"
      />
      <span className="required-text">Required Information</span>
    </div>
  );
};

export default RequiredInfo;
