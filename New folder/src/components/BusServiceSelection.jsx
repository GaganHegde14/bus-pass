import React, { useState, useEffect, useRef } from 'react';
import PaymentIcon from '../assets/svg/payment.svg';
import NoteIcon from '../assets/svg/noteicon.svg';
import SlotInfo from './SlotInfo';
import CustomCheckbox from './CustomCheckbox';
import NotesPopup from './NotesPopup';
import '../styles/BusServiceSelection.css';
import '../styles/CustomCheckbox.css';

const BusServiceSelection = () => {
  const [selectedService, setSelectedService] = useState('shuttle');
  const [isNotesPopupOpen, setIsNotesPopupOpen] = useState(false);
  const notesContainerRef = useRef(null);

  const handleNotesClick = () => {
    setIsNotesPopupOpen(true);
  };

  const handleCloseNotesPopup = () => {
    setIsNotesPopupOpen(false);
  };

  // Close popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notesContainerRef.current && !notesContainerRef.current.contains(event.target)) {
        setIsNotesPopupOpen(false);
      }
    };

    if (isNotesPopupOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isNotesPopupOpen]);

  return (
    <div className="bus-service-main-container">
      <div className="single-line-container">
        <div className="service-type-section">
          <h3 className="service-type-title">Service Type</h3>
          <div className="service-options">
            <CustomCheckbox
              checked={selectedService === 'shuttle'}
              onChange={(e) => setSelectedService(e.target.value)}
              name="serviceType"
              value="shuttle"
              label="Shuttle"
            />
            
            <CustomCheckbox
              checked={selectedService === 'lmc'}
              onChange={(e) => setSelectedService(e.target.value)}
              name="serviceType"
              value="lmc"
              label="LMC"
            />
          </div>
        </div>

        <SlotInfo />
        
        <div className="action-icons">
          <img src={PaymentIcon} alt="Payment" className="action-icon" />
          <div className="notes-icon-container" ref={notesContainerRef}>
            <img 
              src={NoteIcon} 
              alt="Note" 
              className="action-icon" 
              onClick={handleNotesClick}
            />
            <NotesPopup 
              isOpen={isNotesPopupOpen} 
              onClose={handleCloseNotesPopup} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusServiceSelection;