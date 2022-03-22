import React from 'react';

export default function Portrait({ person }) {
  return (
    <div>
      <img src={`./images/${(person.name).split(' ').join('-').toLowerCase()}.jpg`} />
      <p>{person.name}</p>
    </div>
  );
}
