import React, { useState } from "react";
import "../styles/LocationDetailsForm.css";
import datepickerIcon from "../assets/svg/datepickericon.svg";
import dropdownIcon from "../assets/svg/dropdown.svg";
import searchIcon from "../assets/svg/searchicon.svg";
import BusRouteTable from "./BusRouteTable";

const LocationDetailsForm = () => {
  const [formData, setFormData] = useState({
    location: "Marathalli",
    effectiveDate: "2024-05-24",
    mobileNo: "+91 7550142047",
  });

  const [isAgreed, setIsAgreed] = useState(true);

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
              className="form-input location-select"
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
              className="form-input date-input"
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
              className="form-input mobile-input"
              placeholder="+91 7550142047"
            />
          </div>
        </div>
      </div>

      {/* Bus Route Table */}
      <BusRouteTable />

      {/* Agreement Section */}
      <div className="agreement-section">
        <label className="agreement-checkbox">
          <input
            type="checkbox"
            checked={isAgreed}
            onChange={handleAgreementChange}
          />
          <span className="checkmark"></span>I agree to pay the current
          subsidized fees of <strong>INR 800/-</strong> to avail the shuttle
          services provided by SRIB. The said fees is subject to revision as per
          managements' discretion.
        </label>
      </div>
    </div>
  );
};

export default LocationDetailsForm;
