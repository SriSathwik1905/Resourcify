import React, { useState, useEffect } from 'react';
import TaskList from './TaskList';

const TaskListGroup = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    let apiUrl = 'http://localhost:5000/api/task/get_name';

    // Fetch data based on the constructed URL
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const taskData = data.filter((item: object) => item.hasOwnProperty('TaskName'));
        setTasks(taskData);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []); // Provide an empty dependency array to run the effect only once when the component mounts

  return (
    
    <div className="taskContainer">
        <div className='TaskListGroup'>
          {tasks.map((task: object, index: number) => (
            <>  
                <TaskList
                    key={index}
                    name={task.TaskName}
                    project={task.Project}
                />
                <hr/>
            </>
          ))}
        </div>
    </div>
  );
};

export default TaskListGroup;
