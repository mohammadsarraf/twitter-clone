import React, { useState } from 'react';
import './WriteTweet.css';

const WriteTweet = ({ onAddTweet }) => {
  const [username, setUsername] = useState('');
  const [content, setContent] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      setContent((prevContent) => prevContent + '\n');
    }
  };

  const handleSubmit = () => {
    if (username && content) {
      onAddTweet(username, content);
      setUsername('');
      setContent('');
    }
  };

  return (
    <div className="write-tweet-container">
      <div className="profile-icon"></div>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={handleUsernameChange}
        className="username-input"
      />
      <textarea
        placeholder="What's happening?"
        value={content}
        onChange={handleContentChange}
        onKeyDown={handleKeyDown} // Add the keydown event handler
      />
      <button onClick={handleSubmit} className="tweet-button">
        Tweet
      </button>
    </div>
  );
};

export default WriteTweet;
