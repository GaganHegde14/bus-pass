import React, { useState, useRef, useEffect } from "react";
import "../styles/BusOperatingTimePopup.css";

const BusOperatingTimePopup = ({ isOpen, onClose, triggerRef }) => {
  const popupRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose, triggerRef]);

  if (!isOpen) return null;

  return (
    <div className="bus-operating-popup" ref={popupRef}>
      <div className="popup-content">
        <div className="slot-row">
          <span className="slot-text">
            <strong>Slot 1 -</strong> 7:45 AM - 5:00 PM (A4, E8, S1, S3, S4, S7,
            S8, W1, W4, W8, W9)
          </span>
        </div>
        <div className="slot-row">
          <span className="slot-text">
            <strong>Slot 2 -</strong> 8:20 AM - 5:45 PM (All other routes)
          </span>
        </div>
      </div>
    </div>
  );
};

export default BusOperatingTimePopup;
