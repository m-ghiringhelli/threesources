import React, { useEffect, useState } from 'react';
import { fetchTudors } from '../../services/tudors';

export default function Tudors() {
  const [monarchs, setMonarchs] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetchTudors();
        setMonarchs(resp);
      } catch (e) {
        setErrorMessage(`couldn't load tudors`);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <p>{errorMessage}</p>
      <div>
        {monarchs.map((monarch) => (
          <p key={monarch.id}>{monarch.name}</p>
        ))}
      </div>
    </>
  );
}
