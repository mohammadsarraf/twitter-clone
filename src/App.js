import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Tweet from './Components/Tweet';
import SearchBar from './Components/SearchBar';


const App = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleNavbar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="App">
      <Navbar isExpanded={isExpanded} onToggle={toggleNavbar} />
      <SearchBar isExpanded={isExpanded}/>
      
      <div className="tweets-container">
        <Tweet
          username="JohnDoe"
          content="Hello, Twitter! This is my first tweet.<br /><br /><br /><br /><br />
                    hello"
        />

        <Tweet
          username="JaneSmith"
          content="Excited to share some exciting news! Stay tuned."
        />
      </div>
    </div>
  );
};

export default App;
