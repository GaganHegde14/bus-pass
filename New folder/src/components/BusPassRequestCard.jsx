import React from "react";
import "../styles/TrainingVideos1.css";
import EmployeeDetailsForm from "./EmployeeDetailsForm";

const BusPassRequestCard = () => {
  return (
    <div className="training-videos-container">
      {/* Main Blue Rectangle Container - Now contains Bus Pass Request Form */}
      <div className="main-rectangle">
        {/* Bus Pass Request Form Component */}
        <EmployeeDetailsForm />
      </div>
    </div>
  );
};

export default BusPassRequestCard;
