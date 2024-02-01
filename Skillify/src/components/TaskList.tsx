import React from 'react';

interface TaskListProps {
  // Define your props here
  name: string;
  project: string;
}

const TaskList: React.FC<TaskListProps> = ({ name,project }) => {
  return (
    <div className='TaskList'>
      <h2>{name}</h2>
      <h2>{project}</h2>
    </div>
  );
};

export default TaskList;