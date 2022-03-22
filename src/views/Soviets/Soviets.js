import React from 'react';
import { fetchSoviets } from '../../services/soviets';

export default function Soviets() {
  
  fetchSoviets();

  return (
    <div>Soviets</div>
  );
}
