import React, { useState } from 'react';
import CustomCheckbox from './CustomCheckbox';
import '../styles/RequestType.css';
import '../styles/CustomCheckbox.css';

const RequestType = () => {
  const [selectedRequestType, setSelectedRequestType] = useState('Registration');

  return (
    <div className="request-type-container">
      <h3 className="request-type-title">Request Type</h3>
      <div className="request-type-options">
        <CustomCheckbox
          checked={selectedRequestType === 'Registration'}
          onChange={(e) => setSelectedRequestType(e.target.value)}
          name="requestType"
          value="Registration"
          label="Registration"
        />
        
        <CustomCheckbox
          checked={selectedRequestType === 'De-Registration'}
          onChange={(e) => setSelectedRequestType(e.target.value)}
          name="requestType"
          value="De-Registration"
          label="De-Registration"
        />
        
        <CustomCheckbox
          checked={selectedRequestType === 'Change Route'}
          onChange={(e) => setSelectedRequestType(e.target.value)}
          name="requestType"
          value="Change Route"
          label="Change Route"
        />
      </div>
    </div>
  );
};

export default RequestType;