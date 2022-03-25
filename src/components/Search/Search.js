import React from 'react';

export default function Search({ searchText, setSearchText, setSearch }) {
  return (
    <div>
      <input type='text' onChange={(e) => {setSearchText(e.target.value);}}></input>
      <button onClick={() => {setSearch(searchText);}}>
        search
      </button>
    </div>
  );
}
