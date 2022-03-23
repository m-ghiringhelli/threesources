import React, { useEffect, useState } from 'react';
import { fetchPresidents } from '../../services/presidents';
import Portrait from '../../components/Portrait/Portrait';
import Search from '../../components/Search/Search';

export default function Presidents() {
  const [presidents, setPresidents] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [searchText, setSearchText] = useState('');
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetchPresidents(search);
        setPresidents(resp);
      } catch (e) {
        setErrorMessage('dangit broke');
      }
    };
    fetchData();
  }, [search]);

  return (
    <>
      <p>{errorMessage}</p>
      <Search {...{ setSearchText, setSearch, searchText }} />
      <div>
        {presidents.map((president) => (
          <Portrait key={president.id} person={president} /> 
        ))} 
      </div>
    </>
  );
}
