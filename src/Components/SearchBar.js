import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { AiOutlinePlus } from 'react-icons/ai';
import './SearchBar.css'; // Import the CSS file for the component

const SearchBar = ({ isExpanded }) => {
  return (
    <div className="search-bar-container">
      <div className={isExpanded ? `search-bar` : `search-bar-folded`}>
        <div className="search-input-container">
          <FiSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search..."
            className="search-input"
          />
        </div>
      </div>
      <button className="add-icon-button">
        <AiOutlinePlus className="add-icon" />
      </button>
    </div>
  );
};

export default SearchBar;
