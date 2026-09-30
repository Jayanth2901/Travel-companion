import React, { useState } from 'react';

const SearchBar = ({ onSearch, placeholder = 'Search...' }) => {
  const [query, setQuery] = useState('');
  const handleSubmit = (e) => { e.preventDefault(); onSearch(query); };
  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        value={query} onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700">Search</button>
    </form>
  );
};
export default SearchBar;
