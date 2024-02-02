// Popup.tsx
import React from 'react';

interface PopupProps {
  onClose: () => void; // Function to close the popup
}

const Popup: React.FC<PopupProps> = ({ onClose }) => {
  return (
    <>
      {/* Darkened background overlay */}
      <div className='overlay'></div>
      {/* Popup content */}
      <div className='popup'>
        <div className='popup-content'>
          {/* Close button */}
          <button className='close-button' onClick={onClose}>
          ×
          </button>
          <h2>Popup Component</h2>
          {/* Render content based on the data */}
          <p>Data:</p>
        </div>
      </div>
    </>
  );
};

export default Popup;
