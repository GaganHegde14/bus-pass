import React from 'react';
import '../styles/SlotInfo.css';

const SlotInfo = () => {
  return (
    <div className="slots-container">
      <div className="slot-info">
        <span className="slot-title">Slot 1</span>
        <span className="slot-time"> - 7:45 AM - 5:00 PM</span>
        <span className="slot-routes"> (A4, E8, S1, S3, S4, S7, S8, W1, W4, W8, W9)</span>
      </div>
      
      <div className="vertical-line"></div>
      
      <div className="slot-info">
        <span className="slot-title">Slot 2</span>
        <span className="slot-time"> - 8:20 AM - 5:45 PM</span>
        <span className="slot-routes"> (All other routes)</span>
      </div>
    </div>
  );
};

export default SlotInfo;