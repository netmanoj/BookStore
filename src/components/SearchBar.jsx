// SearchBar.js
import React from 'react';


const SearchBar = () => {
  return (
    <div className="search-bar-container">
      <div className="logo">Bookchor</div>
      <div className="search-bar-wrapper">
        <input type="text" placeholder="Search for books..." />
        <button className="search-button" type="button">Search</button>
      </div>
      <button className="login-button" type="button">Login</button>
    </div>
    
  );
};

export default SearchBar;
