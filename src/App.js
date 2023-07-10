import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Tweet from './Components/Tweet';
import SearchBar from './Components/SearchBar';


const App = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [tweets, setTweets] = useState([
    {
      username: "JohnDoe",
      content: "Hello, Twitter! This is my first tweet.<br /><br /><br /><br /><br /> hello"
    },
    {
      username: "JaneSmith",
      content: "Excited to share some exciting news! Stay tuned."
    }
  ]);

  const addTweet = (username, content) => {
    if (username && content) {
      const newTweet = {
        username,
        content,
      };
  
      setTweets([...tweets, newTweet]);
    }
  };
  

  const toggleNavbar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="App">
      <Navbar isExpanded={isExpanded} onToggle={toggleNavbar} />
      <SearchBar isExpanded={isExpanded} onAddTweet={addTweet} />

      
      <div className="tweets-container">
        {tweets.map( (tweet) => {
          return(
            <Tweet username={tweet.username} content={tweet.content}/>
          )
        })}
      </div>
    </div>
  );
};

export default App;
