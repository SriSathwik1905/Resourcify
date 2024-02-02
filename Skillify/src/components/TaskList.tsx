// TaskList.tsx
import React from 'react';

interface TaskListProps {
  id: number;
  name: string;
  project: string;
  onClick: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ id, name, project, onClick }) => {
  const handleClick = () => {
    onClick(id);
  };

  return (
    <div className='TaskList' onClick={handleClick}>
      <h2>{name}</h2>
      <h2>{project}</h2>
    </div>
  );
};

export default TaskList;
