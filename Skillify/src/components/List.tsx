import React from 'react';
import './List.css'

interface ListProps {
  items: string[];
}

const List: React.FC<ListProps> = ({ items }) => {
  return (
    
    <div className='list-container'>
      <ul className='list-group'>
        {items.map((item, index) => (
          <li className='list-group-item' key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;
