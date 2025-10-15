import React from "react";
import "../styles/BusRouteTable.css";
import plusIcon from "../assets/svg/plusicon.svg";
import redBellIcon from "../assets/svg/redbellicon.svg";
import infoMarkIcon from "../assets/svg/infomark.svg";

const BusRouteTable = () => {
  return (
    <div className="bus-route-table-container">
      {/* Header with Bus Route List title */}
      <h3 className="bus-route-title">Bus Route List</h3>

      {/* Table */}
      <div className="route-table">
        {/* Table Header */}
        <div className="table-header-row">
          <div className="header-cell route-name-col">Route Name</div>
          <div className="header-cell seat-col">Seat</div>
          <div className="header-cell capacity-col">Capacity</div>
          <div className="header-cell occupied-col">Occupied</div>
          <div className="header-cell operating-time-col">
            Bus Operating Time
            <img src={infoMarkIcon} alt="Info" className="info-icon" />
          </div>
          <div className="header-cell route-map-col">Route Map</div>
        </div>

        {/* Row 1 - E1 SEEDEMALLI */}
        <div className="table-row row-grey">
          <div className="table-cell route-name-cell">
            <img src={plusIcon} alt="Plus" className="plus-icon" />
            E1 - SEEGEHALLI
          </div>
          <div className="table-cell seat-cell">
            <span className="seat-available">Available</span>
          </div>
          <div className="table-cell capacity-cell">11</div>
          <div className="table-cell occupied-cell">6</div>
          <div className="table-cell operating-time-cell">
            7:45 AM - 5:00 PM
          </div>
          <div className="table-cell route-map-cell">
            <button className="click-here-btn">Click Here</button>
          </div>
        </div>

        {/* Row 2 - E8 BALAGERE */}
        <div className="table-row row-blue">
          <div className="table-cell route-name-cell">
            <img src={plusIcon} alt="Plus" className="plus-icon" />
            E8 - BALAGERE
          </div>
          <div className="table-cell seat-cell">
            <span className="seat-occupied">Occupied</span>
          </div>
          <div className="table-cell capacity-cell">11</div>
          <div className="table-cell occupied-cell">11</div>
          <div className="table-cell operating-time-cell">
            7:45 AM - 5:00 PM
          </div>
          <div className="table-cell route-map-cell">
            <button className="click-here-btn">Click Here</button>
            <div className="notify-container">
              <img src={redBellIcon} alt="Notify" className="notify-icon" />
              <span className="notify-text">Notify Me</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusRouteTable;
