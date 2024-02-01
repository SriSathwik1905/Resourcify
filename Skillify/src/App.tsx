import React, { useState, useEffect } from 'react';
import EmployeeCardGroup from './components/EmployeeCardGroup';
import TaskListGroup from './components/TaskListGroup';

const App = () => {
  const [employees, setEmployees] = useState([]);
  const [skills, setSkills] = useState(['Problem Solving']); // Initial skill value



  const [mode, setMode] = useState('get_data'); // Default mode is 'get_data'

  useEffect(() => {
    let apiUrl;

    if (mode === 'get_data') {
      apiUrl = 'http://localhost:5000/api/employee/get_data';
    } else if (mode === 'filtered_data') {
      // Construct the URL dynamically with the current skills
      apiUrl = `http://localhost:5000/api/employee/filter_skills?${skills.map((skill, index) => `skill${index + 1}=${encodeURIComponent(skill)}`).join('&')}`;
    }

    // Fetch data based on the constructed URL
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const employeeData = data.filter((item:object) => item.hasOwnProperty('Name'));
        setEmployees(employeeData);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [mode, skills]); // Include 'skills' in the dependency array to trigger the effect when skills change



  return (
    <>
      <div>
      <div style={{ height: '400px', width: '400px', backgroundColor: 'gray' }}></div>
        <TaskListGroup/>
      </div>
      <EmployeeCardGroup employees={employees}/>
    </>
  );
};

export default App;



