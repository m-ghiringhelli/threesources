import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <div className='header'>
      <ul>
        <li>
          <NavLink className='link' exact to='/'>
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink className='link' to='/presidents'>
            RECONSTRUCTION PRESIDENTS
          </NavLink>
        </li>
        <li>
          <NavLink className='link' to='/soviets'>
            SOVIET LEADERS
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
