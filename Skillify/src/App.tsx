import React, { useState, useEffect } from 'react';
import List from './components/List';
import './App.css';
import EmployeeCard from './components/EmployeeCard';
import EmployeeCardGroup from './components/EmployeeCardGroup';

const App = () => {
  const [employees, setEmployees] = useState([]);
  const [tasks, setTasks] = useState([]);
  //const [empSkills, setEmpSkills] = useState([]);
  const [skills, setSkills] = useState(['Problem Solving']); // Initial skill value
  const task = ['Website Design','Backend Design','Backend Coder','Marketing'];


  useEffect(() => {
    // Construct the URL dynamically with the current skills
    const apiUrl = `http://localhost:5000/api/filter_skills?${skills.map((skill, index) => `skill${index + 1}=${encodeURIComponent(skill)}`).join('&')}`;

    // Fetch data from Flask API when the component mounts
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        // Assuming data is an array of objects with 'Name' property for employees and tasks
        const employeeData = data.filter(item => item.hasOwnProperty('Name'));

        setEmployees(employeeData);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [skills]); // Include 'skills' in the dependency array to trigger the effect when skills change



  return (
    <>
      <List items={employees.map(employee => employee.Name)} />
      <EmployeeCardGroup employees={employees}/>
    </>
  );
};

export default App;



