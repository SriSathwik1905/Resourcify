// EmployeeCardGroup.tsx

import React from 'react';
import EmployeeCard from './EmployeeCard'; // Adjust the path based on your project structure

interface Employee {
  Name: string;
  Skill1: string;
  Skill2: string;
  Skill3: string;
  Experience1: number;
  Experience2: number;
  Experience3: number;
  YearExp: number;
}

interface EmployeeCardGroupProps {
  employees: Employee[];
}

const EmployeeCardGroup: React.FC<EmployeeCardGroupProps> = ({ employees }) => {
  return (
    <div>
      {employees.map((employee, index) => (
        <EmployeeCard
          key={index}
          name={employee.Name}
          skill1={employee.Skill1}
          skill2={employee.Skill2}
          skill3={employee.Skill3}
          exp1={employee.Experience1}
          exp2={employee.Experience2}
          exp3={employee.Experience3}
          yearexp={employee.YearExp}
        />
      ))}
    </div>
  );
};

export default EmployeeCardGroup;