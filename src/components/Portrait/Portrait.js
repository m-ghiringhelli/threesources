import React from 'react';
import './Portrait.css';

export default function Portrait({ person }) {
  return (
    <div className='portrait'>
      <img src={`./images/${(person.name).split(' ').join('-').toLowerCase()}.jpg`} />
      <span>{(person.name).toUpperCase()}</span>
    </div>
  );
}
