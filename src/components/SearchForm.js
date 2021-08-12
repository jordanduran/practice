import { useState } from 'react';

const SearchForm = ({ onHandleFilterTable }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onHandleFilterTable(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit} className='search-form'>
      <label>Search by name:</label>
      <input type='text' value={searchTerm} onChange={handleChange} />
    </form>
  );
};

export default SearchForm;
