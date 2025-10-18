import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "../styles/EmployeeDetailsForm.css";
import paymentIcon from "../assets/svg/payment.svg";
import noteIcon from "../assets/svg/noteicon.svg";
import calendarIcon from "../assets/svg/calender.svg";
import BusServiceSelection from "./BusServiceSelection";
import RequestType from "./RequestType";
import LocationDetailsForm from "./LocationDetailsForm";
import BusRouteTable from "./BusRouteTable";

const EmployeeDetailsForm = () => {
  const location = useLocation();
  const isCardRequestRoute = location.pathname === "/state1";
  const isReportRoute = location.pathname === "/report";

  const [formData, setFormData] = useState({
    serviceType: "Shuttle",
    requestType: "Registration",
    location: "Marathalli",
    effectiveDate: "24-May-2024",
    mobileNo: "+91 7550142047",
    selectedRoute: "E1 - SEEDEMALLI",
  });

  const [selectedRequestType, setSelectedRequestType] = useState(
    isReportRoute ? "Registration" : "Registration"
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleRequestTypeChange = (requestType) => {
    setSelectedRequestType(requestType);
    setFormData((prevState) => ({
      ...prevState,
      requestType: requestType,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Bus booking form submitted:", formData);
  };

  if (!isCardRequestRoute && !isReportRoute) {
    return (
      <div className="employee-details-form-container">
        {/* Empty grey container for other routes */}
      </div>
    );
  }

  return (
    <div className="employee-details-form-container">
      {/* Header Slots */}

      <BusServiceSelection
        selectedRequestType={selectedRequestType}
        isReportRoute={isReportRoute}
      />

      <RequestType
        onRequestTypeChange={handleRequestTypeChange}
        isReportRoute={isReportRoute}
      />

      <form onSubmit={handleSubmit} className="bus-booking-form">
        {/* Service Type */}

        {/* Location Details Form */}
        <LocationDetailsForm
          selectedRequestType={selectedRequestType}
          isReportRoute={isReportRoute}
        />

        {/* Submit Button - Hide for Report route */}
        {!isReportRoute && (
          <div className="submit-section">
            <button type="submit" className="submit-button">
              Submit
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default EmployeeDetailsForm;
