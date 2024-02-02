// TaskListGroup.tsx
import React, { useState, useEffect } from 'react';
import TaskList from './TaskList';
import TaskDetails from './TaskDetails';

interface TaskListGroupProps {
  onTaskClick: (id: number) => void;
}

const TaskListGroup: React.FC<TaskListGroupProps> = ({ onTaskClick }) => {
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
    // Propagate the selected task ID to the parent component (App)
    if (onTaskClick) {
      onTaskClick(id);
    }
  };

  return (
    <div className="taskArea">
      <TaskDetails id={selectedTaskId} />
      <div className="taskContainer">
        <div className='TaskListGroup'>
          {tasks.map((task: object, index: number) => (
            <React.Fragment key={index}>
              <TaskList
                id={task.TaskID}
                name={task.TaskName}
                project={task.Project}
                onClick={handleTaskClick}
              />
              <hr />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskListGroup;
