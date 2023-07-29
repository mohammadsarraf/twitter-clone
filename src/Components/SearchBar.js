import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { AiOutlinePlus } from 'react-icons/ai';
import './SearchBar.css';
import WriteTweet from './WriteTweet';
import './WriteTweet.css';

const SearchBar = ({ isExpanded, onAddTweet }) => {
  const [displayWriteTweet, setDisplayWriteTweet] = useState(false);

  const handleAddTweet = () => {
    setDisplayWriteTweet(true);
  };

  const handleAddTweetSubmit = (username, content) => {
    onAddTweet(username, content);
    setDisplayWriteTweet(false);
  };

  const handleCloseTweet = () => {
    setDisplayWriteTweet(false);
  }

  return (
    <div className="search-bar-container">
      <div className={isExpanded ? 'search-bar' : 'search-bar-folded'}>
        <div className="search-input-container">
          <FiSearch className="search-icon" />
          <input type="text" placeholder="Search..." className="search-input" />
        </div>
      </div>
      <button className="add-icon-button" onClick={handleAddTweet}>
        <AiOutlinePlus className="add-icon" />
      </button>

      {displayWriteTweet && (
        <WriteTweet onAddTweet={handleAddTweetSubmit} onCloseTweet={handleCloseTweet} /> // Pass the correct event handler
      )}
    </div>
  );
};

export default SearchBar;
