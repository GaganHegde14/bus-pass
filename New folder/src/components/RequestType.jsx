import React, { useState } from "react";
import CustomCheckbox from "./CustomCheckbox";
import CommentInput from "./CommentInput";
import "../styles/RequestType.css";
import "../styles/CustomCheckbox.css";

const RequestType = ({ onRequestTypeChange, isReportRoute = false }) => {
  const [selectedRequestType, setSelectedRequestType] =
    useState("Registration");

  const handleRequestTypeChange = (value) => {
    if (!isReportRoute) {
      setSelectedRequestType(value);
      if (onRequestTypeChange) {
        onRequestTypeChange(value);
      }
    }
  };

  return (
    <div className="request-type-container">
      <h3 className="request-type-title">Request Type</h3>
      <div className="request-type-options">
        <CustomCheckbox
          checked={selectedRequestType === "Registration"}
          onChange={
            !isReportRoute
              ? (e) => handleRequestTypeChange(e.target.value)
              : undefined
          }
          name="requestType"
          value="Registration"
          label="Registration"
          disabled={isReportRoute}
          isReportRoute={isReportRoute}
        />

        <CustomCheckbox
          checked={selectedRequestType === "De-Registration"}
          onChange={
            !isReportRoute
              ? (e) => handleRequestTypeChange(e.target.value)
              : undefined
          }
          name="requestType"
          value="De-Registration"
          label="De-Registration"
          disabled={isReportRoute}
          isReportRoute={isReportRoute}
        />

        <CustomCheckbox
          checked={selectedRequestType === "Change Route"}
          onChange={
            !isReportRoute
              ? (e) => handleRequestTypeChange(e.target.value)
              : undefined
          }
          name="requestType"
          value="Change Route"
          label="Change Route"
          disabled={isReportRoute}
          isReportRoute={isReportRoute}
        />
      </div>

      {/* Note: CommentInput moved to LocationDetailsForm for proper positioning */}
    </div>
  );
};

export default RequestType;
