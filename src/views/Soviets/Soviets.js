import React, { useEffect, useState } from 'react';
import { fetchSoviets } from '../../services/soviets';
import Portrait from '../../components/Portrait/Portrait';

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
          <Portrait key={leader.id} person={leader} />
        ))}
      </div>
    </>
  );
}
