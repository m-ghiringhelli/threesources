import React, { useEffect, useState } from 'react';
import { fetchTudors } from '../../services/tudors';
import Portrait from '../../components/Portrait/Portrait';
import Search from '../../components/Search/Search';

export default function Tudors() {
  const [monarchs, setMonarchs] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [searchText, setSearchText] = useState('');
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetchTudors(search);
        setMonarchs(resp);
      } catch (e) {
        setErrorMessage(`couldn't load tudors`);
      }
    };
    fetchData();
  }, [search]);

  return (
    <>
      <p>{errorMessage}</p>
      <Search {...{ setSearchText, setSearch, searchText }} />
      <div>
        {monarchs.map((monarch) => (
          <Portrait key={monarch.id} person={monarch} />
        ))}
      </div>
    </>
  );
}
