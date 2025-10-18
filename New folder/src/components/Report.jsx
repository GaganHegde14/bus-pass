import React from "react";
import "../styles/Avatars1.css";
import Header from "./Header";
import EmployeeProfile from "./EmployeeProfile";
import RequiredInfo from "./RequiredInfo";
import BusPassRequestCard from "./BusPassRequestCard";

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
        title="Bus Pass Request - Report"
      />

      <EmployeeProfile employee={employeeData} />

      <RequiredInfo />

      <BusPassRequestCard />
    </div>
  );
};

export default Report;
