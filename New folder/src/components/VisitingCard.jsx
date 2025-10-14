import React from "react";
import "../styles/TrainingVideos1.css";
import EmployeeDetailsForm from "./EmployeeDetailsForm";

const VisitingCard = () => {
  return (
    <div className="training-videos-container">
      {/* Main Blue Rectangle Container - Now contains Employee Details Form */}
      <div className="main-rectangle">
        {/* Employee Details Form Component */}
        <EmployeeDetailsForm />
      </div>
    </div>
  );
};

export default VisitingCard;
