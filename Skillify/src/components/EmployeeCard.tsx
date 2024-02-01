import React from 'react';
import './EmployeeCard.css';

interface EmployeeCardProps {
  // Define your props here
  name: string;
  skill1: string;
  skill2: string;
  skill3: string;
  exp1: number;
  exp2: number;
  exp3: number;
  yearexp: number;
}

const EmployeeCard: React.FC<EmployeeCardProps> = ({ name,skill1,skill2,skill3,exp1,exp2,exp3,yearexp }) => {
  return (
    <div>
      <div className="nameslot">
        <h1>{name}</h1>
        <h6>{yearexp}</h6>
      </div>
      <div className="skills">
        <h3>{skill1}</h3>
        <h3>{skill2}</h3>
        <h3>{skill3}</h3>
      </div>
      <div className="pro">
        <h3>{exp1}</h3>
        <h3>{exp2}</h3>
        <h3>{exp3}</h3>
      </div>
    </div>
  );
};

export default EmployeeCard;