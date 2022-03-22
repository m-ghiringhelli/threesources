import React, { useEffect, useState } from 'react';
import { fetchPresidents } from '../../services/presidents';
import Portrait from '../../components/Portrait/Portrait';

export default function Presidents() {
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
          <Portrait key={president.id} person={president} /> 
        ))} 
      </div>
    </>
  );
}
