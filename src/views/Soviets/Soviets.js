import React, { useEffect, useState } from 'react';
import { fetchSoviets } from '../../services/soviets';

export default function Soviets() {
  const [leaders, setLeaders] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetchSoviets();
        setLeaders(resp);
      } catch (e) {
        setErrorMessage(`couldn't load soviet premiers`);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <p>{errorMessage}</p>
      <div>
        {leaders.map((leader) => (
          <p key={leader.id}>{leader.name}</p>
        ))}
      </div>
    </>
  );
}
