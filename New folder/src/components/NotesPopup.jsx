import React from 'react';
import closeIcon from '../assets/svg/popupcloseicon.svg';
import '../styles/NotesPopup.css';

const NotesPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="notes-popup-overlay">
      <div className="notes-popup-container">
        <div className="notes-popup-header">
          <span className="notes-popup-title">Note:</span>
          <button className="notes-popup-close" onClick={onClose}>
            <img src={closeIcon} alt="Close" className="close-icon" />
          </button>
        </div>
        
        <div className="notes-popup-content">
          <div className="terms-section">
            <h4>1. Terms & Conditions</h4>
            
            <ul className="terms-list">
              <li>Conveyance is charges based on calendar month, regardless of date of registration, number of days used or the distance travelled.</li>
            </ul>
            
            <div className="fee-collection">
              <strong>Fee collection :</strong>
              <ul>
                <li>On roll employee, charges for current month usage would be charges in next month's payroll cycle as post-paid</li>
                <li>Outsource / contract employee, fee for current month usage need to be paid on or before 5th of the respective month as prepaid (New registration, payment should be made on the registration day)</li>
                <li>Keep the registration updated by using "Change Route" and update route details as per actual usage</li>
                <li>In case unavailability of seat to register or for any issue on portal, write to srib.transport@samsung.com</li>
                <li>To change route/service from Shuttle to LMC or vice versa, kindly deregister and register again to desired route.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotesPopup;