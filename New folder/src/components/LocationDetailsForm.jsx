import React, { useState } from "react";
import "../styles/LocationDetailsForm.css";
import datepickerIcon from "../assets/svg/datepickericon.svg";
import dropdownIcon from "../assets/svg/dropdown.svg";
import searchIcon from "../assets/svg/searchicon.svg";
import BusRouteTable from "./BusRouteTable";
import CommentInput from "./CommentInput";

const LocationDetailsForm = ({
  selectedRequestType,
  isReportRoute = false,
}) => {
  const [formData, setFormData] = useState({
    location: "Marathalli",
    effectiveDate: "2024-05-24",
    mobileNo: "+91 7550142047",
  });

  const [isAgreed, setIsAgreed] = useState(true);

  // Check if De-Registration is selected or if it's report route to disable inputs
  const isDeRegistration = selectedRequestType === "De-Registration";
  const shouldDisableInputs = isDeRegistration || isReportRoute;

  const locationOptions = [
    "Marathalli",
    "Whitefield",
    "Electronic City",
    "HSR Layout",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAgreementChange = (e) => {
    setIsAgreed(e.target.checked);
  };

  const handleDatePickerClick = () => {
    // Trigger the native date picker
    document.querySelector(".date-input").showPicker();
  };

  return (
    <div className="location-details-form">
      <div className="form-fields-container">
        {/* Location Field */}
        <div className="form-field-group">
          <label className="field-label">
            Location <span className="required-asterisk">*</span>
          </label>
          <div className="input-wrapper location-wrapper">
            <img src={searchIcon} alt="Search" className="search-icon" />
            <select
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              className={`form-input location-select ${
                shouldDisableInputs ? "disabled-input" : ""
              }`}
              disabled={shouldDisableInputs}
            >
              {locationOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <img src={dropdownIcon} alt="Dropdown" className="dropdown-icon" />
          </div>
        </div>

        {/* Effective Date Field */}
        <div className="form-field-group">
          <label className="field-label">
            Effective Date <span className="required-asterisk">*</span>
          </label>
          <div className="input-wrapper date-wrapper">
            <input
              type="date"
              name="effectiveDate"
              value={formData.effectiveDate}
              onChange={handleInputChange}
              className={`form-input date-input ${
                shouldDisableInputs ? "disabled-input" : ""
              }`}
              disabled={shouldDisableInputs}
            />
            <img
              src={datepickerIcon}
              alt="Calendar"
              className="calendar-icon"
              onClick={handleDatePickerClick}
            />
          </div>
        </div>

        {/* Mobile Number Field */}
        <div className="form-field-group">
          <label className="field-label">Mobile No</label>
          <div className="input-wrapper mobile-wrapper">
            <input
              type="text"
              name="mobileNo"
              value={formData.mobileNo}
              onChange={handleInputChange}
              className={`form-input mobile-input ${
                shouldDisableInputs ? "disabled-input" : ""
              }`}
              placeholder="+91 7550142047"
              disabled={shouldDisableInputs}
            />
          </div>
        </div>
      </div>

      {/* Bus Route Table */}
      <BusRouteTable
        selectedRequestType={selectedRequestType}
        isReportRoute={isReportRoute}
      />

      {/* Agreement Section - Hide for De-Registration and Report Route */}
      {!isDeRegistration && !isReportRoute && (
        <div className="agreement-section">
          <label className="agreement-checkbox">
            <input
              type="checkbox"
              checked={isAgreed}
              onChange={handleAgreementChange}
            />
            <span className="checkmark"></span>I agree to pay the current
            subsidized fees of <strong>INR 800/-</strong> to avail the shuttle
            services provided by SRIB. The said fees is subject to revision as
            per managements' discretion.
          </label>
        </div>
      )}

      {/* Comment Input - appears when Change Route OR De-Registration is selected, but not for report route */}
      {!isReportRoute &&
        (selectedRequestType === "Change Route" ||
          selectedRequestType === "De-Registration") && <CommentInput />}
    </div>
  );
};

export default LocationDetailsForm;
