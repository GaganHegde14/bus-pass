import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "../styles/EmployeeDetailsForm.css";
import paymentIcon from "../assets/svg/payment.svg";
import noteIcon from "../assets/svg/noteicon.svg";
import calendarIcon from "../assets/svg/calender.svg";
import BusServiceSelection from "./BusServiceSelection";
import RequestType from "./RequestType";
const EmployeeDetailsForm = () => {
  const location = useLocation();
  const isCardRequestRoute = location.pathname === "/cardrequest";
  
  const [formData, setFormData] = useState({
    serviceType: "Shuttle",
    requestType: "Registration",
    location: "Marathalli",
    effectiveDate: "24-May-2024",
    mobileNo: "+91 7550142047",
    selectedRoute: "E1 - SEEDEMALLI"
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Bus booking form submitted:", formData);
  };

  if (!isCardRequestRoute) {
    return (
      <div className="employee-details-form-container">
        {/* Empty grey container for other routes */}
      </div>
    );
  }

  return (
    <div className="employee-details-form-container">
      {/* Header Slots */}
      
      <BusServiceSelection />
      
      <RequestType />

      <form onSubmit={handleSubmit} className="bus-booking-form">
        {/* Service Type */}
        

        {/* Form Fields Row */}
        <div className="form-fields-row">
          <div className="form-field">
            <label className="field-label">
              Location <span className="required">*</span>
            </label>
            <div className="location-input-wrapper">
              <span className="search-icon">🔍</span>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                className="location-input"
                placeholder="Marathalli"
              />
              <span className="dropdown-arrow">▼</span>
            </div>
          </div>

          <div className="form-field">
            <label className="field-label">
              Effective Date <span className="required">*</span>
            </label>
            <div className="date-input-wrapper">
              <input
                type="text"
                name="effectiveDate"
                value={formData.effectiveDate}
                onChange={handleInputChange}
                className="date-input"
                placeholder="24-May-2024"
              />
              <img src={calendarIcon} alt="Calendar" className="calendar-icon" />
            </div>
          </div>

          <div className="form-field">
            <label className="field-label">Mobile No</label>
            <input
              type="text"
              name="mobileNo"
              value={formData.mobileNo}
              onChange={handleInputChange}
              className="mobile-input"
            />
          </div>
        </div>

        {/* Bus Route List */}
        <div className="bus-route-section">
          <h3 className="bus-route-title">Bus Route List</h3>
          
          <div className="route-table">
            <div className="route-header">
              <div className="header-cell route-name-header">Route Name</div>
              <div className="header-cell">Seat</div>
              <div className="header-cell">Capacity</div>
              <div className="header-cell">Occupied</div>
              <div className="header-cell">
                Bus Operating Time
                <span className="info-icon">ℹ️</span>
              </div>
              <div className="header-cell">Route Map</div>
            </div>

            <div className="route-row">
              <div className="route-cell route-name-cell">
                <span className="plus-icon">+</span>
                E1 - SEEDEMALLI
              </div>
              <div className="route-cell">
                <span className="seat-status available">Available</span>
              </div>
              <div className="route-cell">11</div>
              <div className="route-cell occupied-cell">
                <div className="slot-timing">
                  <div><strong>Slot 1</strong> - 7:45 AM - 5:00 PM (M4, E8, S1, S3, S4, S7, S8, W1, W4, W8, W9)</div>
                  <div><strong>Slot 2</strong> - 8:20 AM - 5:45 PM (All other routes)</div>
                </div>
              </div>
              <div className="route-cell">
                <button type="button" className="click-here-btn">Click Here</button>
              </div>
            </div>

            <div className="route-row">
              <div className="route-cell route-name-cell">
                <span className="plus-icon">+</span>
                E8 - BALAGERE
              </div>
              <div className="route-cell">
                <span className="seat-status occupied">Occupied</span>
              </div>
              <div className="route-cell">11</div>
              <div className="route-cell occupied-cell">
                <div className="slot-timing">
                  <div>11 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 7:45 AM - 5:00 PM</div>
                </div>
              </div>
              <div className="route-cell">
                <div className="route-actions">
                  <button type="button" className="click-here-btn">Click Here</button>
                  <button type="button" className="notify-btn">🔔 Notify Me</button>
                </div>
              </div>
            </div>
          </div>

          {/* Agreement Checkbox */}
          <div className="agreement-section">
            <label className="agreement-checkbox">
              <input type="checkbox" checked />
              <span className="checkmark"></span>
              I agree to pay the current subsidized fees of <strong>INR 800/-</strong> to avail the shuttle services provided by SRIB. The said fees is subject to revision as per managements' discretion.
            </label>
          </div>

          {/* Submit Button */}
          <div className="submit-section">
            <button type="submit" className="submit-button">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EmployeeDetailsForm;
