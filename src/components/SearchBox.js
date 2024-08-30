import React, { useState, useEffect } from 'react';

const SearchBox = ({ setSearchTerm }) => {
  const [search,setSearch]=useState()
  useEffect(() => {
    const handleShortcut = (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key === '/') {
        event.preventDefault();
        document.getElementById('search-input').focus();
      }
    };

    window.addEventListener('keydown', handleShortcut);
    return () => {
      window.removeEventListener('keydown', handleShortcut);
    };
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setSearchTerm(search);
    }
  };


  return (
    <div className="search-box">
        <input
          id="search-input"
          type="text"
          value={search}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Search places..."
        />
        <div className='keyboard-shortcut'>Ctrl + /</div>
    </div>
  );
};

export default SearchBox;
