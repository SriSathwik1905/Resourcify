import React from 'react';

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
  key: number;
}

const EmployeeCard: React.FC<EmployeeCardProps> = ({ name,skill1,skill2,skill3,exp1,exp2,exp3,yearexp }) => {
  return (
    <div className='EmployeeCard'>
      <div className="data-wraper">
        <div className="nameslot">
          <h1>{name}</h1>
          <h5>{yearexp} year experience</h5>
        </div>
        <div className="skills">
          <h3>{skill1}</h3>
          <h3>{skill2}</h3>
          <h3>{skill3}</h3>
        </div>
        <div className="pro">
          <h3>Proficiency: {exp1*100}%</h3>
          <h3>Proficiency: {exp2*100}%</h3>
          <h3>Proficiency: {exp3*100}%</h3>
        </div>
      </div>
      <div className="vl"/>
      <div className='cross'>X</div>
    </div>
  );
};

export default EmployeeCard;