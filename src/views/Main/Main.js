import React, { useEffect, useState } from 'react';
import { fetchPresidents } from '../../services/presidents';

export default function Main() {
  const [presidents, setPresidents] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetchPresidents();
        setPresidents(resp);
      } catch (e) {
        setErrorMessage('dangit broke');
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <p>{errorMessage}</p>
      <div>
        {presidents.map((president) => (
          <p key={president.name}>{president.name}</p> 
        ))} 
      </div>
    </>
  );
}
