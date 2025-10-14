import React from "react";
import "../styles/Avatars1.css";
import Header from "./Header";
import EmployeeProfile from "./EmployeeProfile";
import RequiredInfo from "./RequiredInfo";
import VisitingCard from "./VisitingCard";

const Report = () => {
  const employeeData = {
    initials: "MK",
    name: "Manoj Kandan M",
    genId: "255048778",
    email: "Manoj.kandan@partner.samsung.com",
    designation: "Outsourcing",
    division:
      "Tech Strategy Team\\Smart Infra Group\\Information System & AI Tools",
    location: "Bangalore",
    manager: "Ravindra S R (06786669)",
    isOnline: true,
  };

  return (
    <div className="avatars-container">
      <Header
        breadcrumb="My Workspace > Visiting Card Request"
        title="Visiting Card - Card Request"
      />

      <EmployeeProfile employee={employeeData} />

      <RequiredInfo />

      <VisitingCard />
    </div>
  );
};

export default Report;
