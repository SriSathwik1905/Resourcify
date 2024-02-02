import React, { useState, useEffect } from 'react';
import EmployeeCardGroup from './components/EmployeeCardGroup';
import TaskListGroup from './components/TaskListGroup';

const App = () => {
  const [employees, setEmployees] = useState([]);
  const [skills, setSkills] = useState([]); // Initial skill value
  const [selectedTaskId, setSelectedTaskId] = useState<number | null>(null); // State for selected task ID
  const [selectedButton, setSelectedButton] = useState('unassigned'); // 'assigned' or 'unassigned'
  const [symbol, setSymbol] = useState<string | null>(null); // Specify the type for 'symbol'

  const handleButtonClick = (button: string) => {
    setSelectedButton(button);
  };

  const handleTaskClick = (id: number) => {
    setSelectedTaskId(id);
  };

  useEffect(() => {
    let apiUrl;

    if (selectedButton === 'unassigned') {
      apiUrl = `http://localhost:5000/api/employee/unassigned/filter_skills?${skills
        .map((skill, index) => `skill${index + 1}=${encodeURIComponent(skill)}`)
        .join('&')}`;
      setSymbol('+');
    } else if (selectedButton === 'assigned') {
      apiUrl = 'http://localhost:5000/api/employee/assigned/';
      setSymbol('-');
    }

    // Fetch data based on the constructed URL
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const employeeData = data.filter((item: object) => item.hasOwnProperty('Name'));
        setEmployees(employeeData);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [skills, selectedButton, symbol]); // Include 'symbol' in the dependency array

  useEffect(() => {
    if (selectedTaskId !== null) {
      let apiUrl = `http://localhost:5000/api/task/get_details/${selectedTaskId}`;

      // Fetch data based on the constructed URL
      fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        setSkills([data.MandatorySkills]);
      })
      .catch(error => console.error('Error fetching data:', error));
  }
}, [selectedTaskId]); // Include 'skills' in the dependency array to trigger the effect when skills change

  return (
    <>
      <TaskListGroup onTaskClick={handleTaskClick} />
      <div>
        <button
          onClick={() => handleButtonClick('assigned')}
          className={selectedButton === 'assigned' ? 'active' : ''}
        >
          Assigned
        </button>
        <button
          onClick={() => handleButtonClick('unassigned')}
          className={selectedButton === 'unassigned' ? 'active' : ''}
        >
          Unassigned
        </button>
        <EmployeeCardGroup employees={employees} symbol={symbol} />
      </div>
    </>
  );
};

export default App;
