import React, { useState, useEffect } from 'react';
import TaskList from './TaskList';
import TaskDetails from './TaskDetails';

const TaskListGroup = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedTaskId, setSelectedTaskId] = useState<number | null>(null);

  useEffect(() => {
    let apiUrl = 'http://localhost:5000/api/task/get_name';

    // Fetch data based on the constructed URL
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const taskData = data.filter(item => item.hasOwnProperty('TaskName'));
        setTasks(taskData);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []); // Provide an empty dependency array to run the effect only once when the component mounts

  const handleTaskClick = (id: number) => {
    setSelectedTaskId(id);
  };

  return (
    
    <div className="taskArea">
      <TaskDetails id={selectedTaskId} />
      <div className="taskContainer">
        <div className='TaskListGroup'>
          {tasks.map((task: object, index: number) => (
            <>
              <TaskList
                id={task.TaskID} // Assuming you have an 'id' property in your task object
                name={task.TaskName}
                project={task.Project}
                onClick={handleTaskClick}
              />
              <hr />
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskListGroup;
