import React, { useState, useRef, useEffect } from "react";
import "../styles/BusRouteTable.css";
import plusIcon from "../assets/svg/plusicon.svg";
import minusIcon from "../assets/svg/minusicon.svg";
import redBellIcon from "../assets/svg/redbellicon.svg";
import infoMarkIcon from "../assets/svg/infomark.svg";
import clockIcon from "../assets/svg/clockiconn.svg";
import mapIcon from "../assets/svg/mapicon.svg";
import designMapIcon from "../assets/svg/designmap.svg";
import combinedMapsIcon from "../assets/svg/combinedmaps.svg";
import BusOperatingTimePopup from "./BusOperatingTimePopup";

const BusRouteTable = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [expandedRows, setExpandedRows] = useState({});
  const infoIconRef = useRef(null);

  const handleInfoClick = () => {
    setShowPopup(!showPopup);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const toggleRowExpansion = (routeId) => {
    setExpandedRows((prev) => ({
      ...prev,
      [routeId]: !prev[routeId],
    }));
  };

  // Calculate popup position
  useEffect(() => {
    if (showPopup && infoIconRef.current) {
      const popup = document.querySelector(".bus-operating-popup");
      if (popup) {
        const iconRect = infoIconRef.current.getBoundingClientRect();
        popup.style.top = `${iconRect.bottom + 8}px`;
        popup.style.left = `680px`; // Fixed position at 680px
      }
    }
  }, [showPopup]);
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
            <img
              ref={infoIconRef}
              src={infoMarkIcon}
              alt="Info"
              className="info-icon"
              onClick={handleInfoClick}
            />
          </div>
          <div className="header-cell route-map-col">Route Map</div>
        </div>

        {/* Row 1 - E1 SEEGEHALLI */}
        <div className="table-row row-grey">
          <div className="table-cell route-name-cell">
            <img
              src={expandedRows["E1"] ? minusIcon : plusIcon}
              alt={expandedRows["E1"] ? "Minus" : "Plus"}
              className="plus-icon"
              onClick={() => toggleRowExpansion("E1")}
            />
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

        {/* Expanded Row for E1 */}
        {expandedRows["E1"] && (
          <div className="expanded-row">
            <div className="expanded-content">
              <div className="expanded-table">
                {/* First row - selected */}
                <div className="expanded-table-row selected">
                  <div className="expanded-cell time-cell">
                    <div className="time-radio selected"></div>
                    <img src={clockIcon} alt="Clock" className="detail-icon" />
                    <span>07:22 AM</span>
                  </div>
                  <div className="expanded-cell location-cell">
                    <img src={mapIcon} alt="Location" className="detail-icon" />
                    <span>Gorvigere</span>
                  </div>
                  <div className="expanded-cell destination-cell">
                    <img
                      src={mapIcon}
                      alt="Destination"
                      className="detail-icon"
                    />
                    <span>Gorvigere Village Gate</span>
                  </div>
                  <div className="expanded-cell viewmap-cell">
                    <img
                      src={designMapIcon}
                      alt="View Map"
                      className="detail-icon"
                    />
                    <span>View Map</span>
                  </div>
                </div>

                {/* Second row */}
                <div className="expanded-table-row">
                  <div className="expanded-cell time-cell">
                    <div className="time-radio"></div>
                    <img src={clockIcon} alt="Clock" className="detail-icon" />
                    <span>07:22 AM</span>
                  </div>
                  <div className="expanded-cell location-cell">
                    <img src={mapIcon} alt="Location" className="detail-icon" />
                    <span>Gorvigere</span>
                  </div>
                  <div className="expanded-cell destination-cell">
                    <img
                      src={mapIcon}
                      alt="Destination"
                      className="detail-icon"
                    />
                    <span>Gorvigere Village Gate</span>
                  </div>
                  <div className="expanded-cell viewmap-cell">
                    <img
                      src={designMapIcon}
                      alt="View Map"
                      className="detail-icon"
                    />
                    <span>View Map</span>
                  </div>
                </div>

                {/* Third row */}
                <div className="expanded-table-row">
                  <div className="expanded-cell time-cell">
                    <div className="time-radio"></div>
                    <img src={clockIcon} alt="Clock" className="detail-icon" />
                    <span>07:22 AM</span>
                  </div>
                  <div className="expanded-cell location-cell">
                    <img src={mapIcon} alt="Location" className="detail-icon" />
                    <span>Gorvigere</span>
                  </div>
                  <div className="expanded-cell destination-cell">
                    <img
                      src={mapIcon}
                      alt="Destination"
                      className="detail-icon"
                    />
                    <span>Gorvigere Village Gate</span>
                  </div>
                  <div className="expanded-cell viewmap-cell">
                    <img
                      src={designMapIcon}
                      alt="View Map"
                      className="detail-icon"
                    />
                    <span>View Map</span>
                  </div>
                </div>

                {/* Fourth row */}
                <div className="expanded-table-row">
                  <div className="expanded-cell time-cell">
                    <div className="time-radio"></div>
                    <img src={clockIcon} alt="Clock" className="detail-icon" />
                    <span>07:22 AM</span>
                  </div>
                  <div className="expanded-cell location-cell">
                    <img src={mapIcon} alt="Location" className="detail-icon" />
                    <span>Gorvigere</span>
                  </div>
                  <div className="expanded-cell destination-cell">
                    <img
                      src={mapIcon}
                      alt="Destination"
                      className="detail-icon"
                    />
                    <span>Gorvigere Village Gate</span>
                  </div>
                  <div className="expanded-cell viewmap-cell">
                    <img
                      src={designMapIcon}
                      alt="View Map"
                      className="detail-icon"
                    />
                    <span>View Map</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

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

      {/* Bus Operating Time Popup */}
      <BusOperatingTimePopup
        isOpen={showPopup}
        onClose={handleClosePopup}
        triggerRef={infoIconRef}
      />
    </div>
  );
};

export default BusRouteTable;
