import React, { useState, useEffect } from 'react';
import List from './components/List';
import './App.css';

const App = () => {
  const [employees, setEmployees] = useState([]);
  const [tasks, setTasks] = useState([]);
  let task = ['Website Design','Backend Design','Backend Coder','Marketing'];

  useEffect(() => {
    // Fetch data from Flask API when the component mounts
    fetch('http://localhost:5000/api/get_data') // Adjust the endpoint based on your Flask API
      .then(response => response.json())
      .then(data => {
        // Assuming data is an array of objects with 'Name' property for employees and tasks
        const employeeData = data.filter(item => item.hasOwnProperty('Name'));

        setEmployees(employeeData);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
      <List items={employees.map(employee => employee.Name)} />
      <List items={task} />
    </>
  );
};

export default App;









/*import React from 'react'
import List from './components/List'
import './App.css'

let employees = ['Vansh','Sathwik','Harsh','Om'];
let tasks = ['Website Design','Backend Design','Backend Coder','Marketing'];

const App = () => {
  return (
    <>
      <List items={employees}/>
      <List items={tasks}/>
    </>
  )
}

export default App*/