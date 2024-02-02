import React, { useState, useEffect } from 'react';
import EmployeeCardGroup from './components/EmployeeCardGroup';
import TaskListGroup from './components/TaskListGroup';

const App = () => {
  const [employees, setEmployees] = useState([]);
  const [skills, setSkills] = useState([]); // Initial skill value
  const [selectedTaskId, setSelectedTaskId] = useState<number | null>(null); // State for selected task ID
  

  
  const handleTaskClick = (id: number) => {
    setSelectedTaskId(id);
  };

  useEffect(() => {
    let apiUrl;


      // Construct the URL dynamically with the current skills
      apiUrl = `http://localhost:5000/api/task/get_details/${selectedTaskId}`;


    // Fetch data based on the constructed URL
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
         setSkills([data.MandatorySkills]);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [selectedTaskId]);


  useEffect(() => {
    let apiUrl;


      // Construct the URL dynamically with the current skills
      apiUrl = `http://localhost:5000/api/employee/filter_skills?${skills.map((skill, index) => `skill${index + 1}=${encodeURIComponent(skill)}`).join('&')}`;


    // Fetch data based on the constructed URL
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const employeeData = data.filter((item:object) => item.hasOwnProperty('Name'));
        setEmployees(employeeData);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [skills]); // Include 'skills' in the dependency array to trigger the effect when skills change




  return (
    <>
      <TaskListGroup/>
      <EmployeeCardGroup employees={employees}/>
    </>
  );
};

export default App;



