// TaskDetails.tsx
import React, { useState, useEffect } from 'react';
import Popup from './Popup';

interface TaskDetailsProps {
  id: number | null;
}

// TaskDetails Component
const TaskDetails: React.FC<TaskDetailsProps> = ({ id }) => {
  // State to hold task details
  const [taskDetails, setTaskDetails] = useState<any | null>(null);

  // State to toggle the popup component
  const [showPopup, setShowPopup] = useState<boolean>(false);

  // Effect to fetch task details when the id changes
  useEffect(() => {
    // Check if a valid id is provided
    if (id !== null) {
      // Fetch task details from the server
      fetch(`http://localhost:5000/api/task/get_details/${id}`)
        .then(response => response.json())
        .then(data => {
          // Update state with fetched task details
          setTaskDetails(data);
        })
        .catch(error => console.error('Error fetching data:', error));
    }
  }, [id]);

  // Function to toggle the popup component
  const handleButtonClick = () => {
    setShowPopup(!showPopup);
  };

  // Function to close the popup
  const handleClosePopup = () => {
    setShowPopup(false);
  };

  // Render task details and the popup component
  return (
    <div>
      {taskDetails ? (
        <div>
          {/* Display task details */}
          <h1>{taskDetails.TaskName}</h1>
          <p>Required Skills: {taskDetails.MandatorySkills}</p>
          <p>Preferred Skills: {taskDetails.PreferredSkills}</p>
          {/* Button to toggle the popup component */}
          <button onClick={handleButtonClick}>Toggle Popup</button>
          {/* Render the popup component based on the state */}
          {showPopup && <Popup onClose={handleClosePopup} />}
        </div>
      ) : (
        <p>Select a Task</p>
      )}
    </div>
  );
};

export default TaskDetails;
