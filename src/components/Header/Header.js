import React from 'react';
import { withRouter } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './Header.css';
import classes from './Header.css';

export default function Header() {
  return (
    <div className='header'>
      <div className='headerText'>
        <h1>THREEDERS</h1>
        <h3>three groups of leaders from world history</h3>
      </div>
      <ul className='navbar'>
        <li>
          <NavLink activeStyle={{ color: 'white', textShadow: '0 5px 25px white' }} className='link' exact to='/'>
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={{ color: 'white', textShadow: '0 5px 25px white' }} className='link' to='/presidents'>
            RECONSTRUCTION PRESIDENTS
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={{ color: 'white', textShadow: '0 5px 25px white' }} className='link' to='/soviets'>
            SOVIET LEADERS
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={{ color: 'white', textShadow: '0 5px 25px white' }} className='link' to='/tudors'>
            TUDOR MONARCHS
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
