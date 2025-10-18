import React, { useState, useRef, useEffect } from "react";
import "../styles/BusRouteTable.css";
import plusIcon from "../assets/svg/plusicon.svg";
import minusIcon from "../assets/svg/minusicon.svg";
import redBellIcon from "../assets/svg/redbellicon.svg";
import infoMarkIcon from "../assets/svg/infomark.svg";
import greyInfoMarkIcon from "../assets/svg/greyinfomark.svg";
import clockIcon from "../assets/svg/clockiconn.svg";
import mapIcon from "../assets/svg/mapicon.svg";
import designMapIcon from "../assets/svg/designmap.svg";
import combinedMapsIcon from "../assets/svg/combinedmaps.svg";
import markedCheckIcon from "../assets/svg/markedcheckmark.svg";
import unmarkedCheckIcon from "../assets/svg/unmarkedcheckmark.svg";
import greyCheckIcon from "../assets/svg/grecheckbox.svg";
import BusOperatingTimePopup from "./BusOperatingTimePopup";

const BusRouteTable = ({ selectedRequestType, isReportRoute = false }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [expandedRows, setExpandedRows] = useState({});
  const [selectedTimeSlot, setSelectedTimeSlot] = useState({ E1: 6 }); // Track selected time slot for each route - 7th row (index 6)
  const infoIconRef = useRef(null);
  const expandedTableRef = useRef(null);

  // Check if De-Registration is selected or if it's report route
  const isDeRegistration = selectedRequestType === "De-Registration";
  const shouldDisableCheckbox = isDeRegistration || isReportRoute;

  const handleInfoClick = () => {
    setShowPopup(!showPopup);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const toggleRowExpansion = (routeId) => {
    setExpandedRows((prev) => {
      const newExpandedRows = {
        ...prev,
        [routeId]: !prev[routeId],
      };

      // If expanding and this is the first time, scroll to middle after DOM update
      if (!prev[routeId] && newExpandedRows[routeId]) {
        setTimeout(() => {
          if (expandedTableRef.current) {
            const scrollHeight = expandedTableRef.current.scrollHeight;
            const clientHeight = expandedTableRef.current.clientHeight;
            const scrollTop = (scrollHeight - clientHeight) / 2;
            expandedTableRef.current.scrollTop = scrollTop;
          }
        }, 100);
      }

      return newExpandedRows;
    });
  };

  const handleTimeSlotSelection = (routeId, slotIndex) => {
    setSelectedTimeSlot((prev) => ({
      ...prev,
      [routeId]: slotIndex,
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
    <div
      className={`bus-route-table-container ${
        isReportRoute ? "report-route" : ""
      }`}
    >
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
              src={isReportRoute ? greyInfoMarkIcon : infoMarkIcon}
              alt="Info"
              className="info-icon"
              onClick={isReportRoute ? undefined : handleInfoClick}
              style={isReportRoute ? { cursor: "default" } : {}}
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
              <div
                className={`expanded-table ${
                  isDeRegistration || isReportRoute ? "no-scroll" : ""
                }`}
                ref={expandedTableRef}
              >
                {/* For De-Registration and Report Route: Show only first row without checkbox and scrollbar */}
                {/* For Others: Generate 16 rows for scrollable area */}
                {isDeRegistration || isReportRoute ? (
                  // Single row for De-Registration and Report Route without checkbox
                  <div className="expanded-table-row">
                    <div className="expanded-cell time-cell">
                      <img src={clockIcon} alt="Clock" className="time-icon" />
                      <span>07:22 AM</span>
                    </div>
                    <div className="expanded-cell location-cell">
                      <img
                        src={mapIcon}
                        alt="Location"
                        className="location-icon"
                      />
                      <span>Gorvigere</span>
                    </div>
                    <div className="expanded-cell destination-cell">
                      <img
                        src={designMapIcon}
                        alt="Destination"
                        className="destination-icon"
                      />
                      <span>Gorvigere Village Gate</span>
                    </div>
                    <div className="expanded-cell viewmap-cell">
                      <img
                        src={combinedMapsIcon}
                        alt="View Map"
                        className="viewmap-icon"
                      />
                      <span>View Map</span>
                    </div>
                  </div>
                ) : (
                  // Multiple rows for Registration/Change Route
                  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(
                    (index) => (
                      <div
                        key={index}
                        className={`expanded-table-row ${
                          selectedTimeSlot.E1 === index ? "selected" : ""
                        }`}
                        onClick={
                          shouldDisableCheckbox
                            ? undefined
                            : () => handleTimeSlotSelection("E1", index)
                        }
                        style={
                          shouldDisableCheckbox ? { cursor: "default" } : {}
                        }
                      >
                        <div className="expanded-cell time-cell">
                          <img
                            src={
                              shouldDisableCheckbox
                                ? greyCheckIcon
                                : selectedTimeSlot.E1 === index
                                ? markedCheckIcon
                                : unmarkedCheckIcon
                            }
                            alt="Checkbox"
                            className="time-checkbox"
                          />
                          <img
                            src={clockIcon}
                            alt="Clock"
                            className="time-icon"
                          />
                          <span
                            className={
                              selectedTimeSlot.E1 === index
                                ? "selected-time"
                                : ""
                            }
                          >
                            07:22 AM
                          </span>
                        </div>
                        <div className="expanded-cell location-cell">
                          <img
                            src={mapIcon}
                            alt="Location"
                            className="location-icon"
                          />
                          <span>Gorvigere</span>
                        </div>
                        <div className="expanded-cell destination-cell">
                          <img
                            src={designMapIcon}
                            alt="Destination"
                            className="destination-icon"
                          />
                          <span>Gorvigere Village Gate</span>
                        </div>
                        <div className="expanded-cell viewmap-cell">
                          <img
                            src={combinedMapsIcon}
                            alt="View Map"
                            className="viewmap-icon"
                          />
                          <span>View Map</span>
                        </div>
                      </div>
                    )
                  )
                )}
              </div>
            </div>
          </div>
        )}

        {/* Row 2 - E8 BALAGERE - Hide for De-Registration and Report Route */}
        {!isDeRegistration && !isReportRoute && (
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
        )}
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
