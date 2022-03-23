import React, { useEffect, useState } from 'react';
import { fetchSoviets } from '../../services/soviets';
import Portrait from '../../components/Portrait/Portrait';
import Search from '../../components/Search/Search';

export default function Soviets() {
  const [leaders, setLeaders] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [searchText, setSearchText] = useState('');
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetchSoviets(search);
        setLeaders(resp);
      } catch (e) {
        setErrorMessage(`couldn't load soviet premiers`);
      }
    };
    fetchData();
  }, [search]);

  return (
    <>
      <p>{errorMessage}</p>
      <Search {...{ setSearchText, setSearch, searchText }} />
      <div>
        {leaders.map((leader) => (
          <Portrait key={leader.id} person={leader} />
        ))}
      </div>
    </>
  );
}
