import React, { useState, useEffect, useRef } from "react";
import PaymentIcon from "../assets/svg/payment.svg";
import NoteIcon from "../assets/svg/noteicon.svg";
import SlotInfo from "./SlotInfo";
import CustomCheckbox from "./CustomCheckbox";
import NotesPopup from "./NotesPopup";
import "../styles/BusServiceSelection.css";
import "../styles/CustomCheckbox.css";

const BusServiceSelection = ({ selectedRequestType, isReportRoute }) => {
  const [selectedService, setSelectedService] = useState("shuttle");
  const [isNotesPopupOpen, setIsNotesPopupOpen] = useState(false);
  const notesContainerRef = useRef(null);

  // Check if De-Registration is selected to hide payment icon
  const isDeRegistration = selectedRequestType === "De-Registration";
  // For report route, hide both payment and notes icons
  const hideActionIcons = isDeRegistration || isReportRoute;

  const handleNotesClick = () => {
    setIsNotesPopupOpen(true);
  };

  const handleCloseNotesPopup = () => {
    setIsNotesPopupOpen(false);
  };

  // Close popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        notesContainerRef.current &&
        !notesContainerRef.current.contains(event.target)
      ) {
        setIsNotesPopupOpen(false);
      }
    };

    if (isNotesPopupOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isNotesPopupOpen]);

  return (
    <div className="bus-service-main-container">
      <div className="single-line-container">
        <div className="service-type-section">
          <h3 className="service-type-title">Service Type</h3>
          <div className="service-options">
            <CustomCheckbox
              checked={selectedService === "shuttle"}
              onChange={
                !isReportRoute
                  ? (e) => setSelectedService(e.target.value)
                  : undefined
              }
              name="serviceType"
              value="shuttle"
              label="Shuttle"
              disabled={isReportRoute}
              isReportRoute={isReportRoute}
            />

            <CustomCheckbox
              checked={selectedService === "lmc"}
              onChange={
                !isReportRoute
                  ? (e) => setSelectedService(e.target.value)
                  : undefined
              }
              name="serviceType"
              value="lmc"
              label="LMC"
              disabled={isReportRoute}
              isReportRoute={isReportRoute}
            />
          </div>
        </div>

        {/* Hide SlotInfo and action icons for report route */}
        {!isReportRoute && <SlotInfo />}

        {!isReportRoute && (
          <div className="action-icons">
            {/* Hide payment icon for De-Registration */}
            {!isDeRegistration && (
              <img src={PaymentIcon} alt="Payment" className="action-icon" />
            )}
            <div className="notes-icon-container" ref={notesContainerRef}>
              <img
                src={NoteIcon}
                alt="Note"
                className="action-icon"
                onClick={handleNotesClick}
              />
              <NotesPopup
                isOpen={isNotesPopupOpen}
                onClose={handleCloseNotesPopup}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BusServiceSelection;
