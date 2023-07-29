import React, { useState, useRef } from 'react';
import { FaUserCircle, FaHeart, FaCloud, FaRetweet, FaPlus } from 'react-icons/fa';

import './WriteTweet.css';

const WriteTweet = ({ onAddTweet, onCloseTweet }) => {
  const [username, setUsername] = useState('');
  const [content, setContent] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);
  const fileInputRef = useRef(null);

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
      onAddTweet(username, content, profilePicture);
      setUsername('');
      setContent('');
      setProfilePicture(null);
    }
  };

  const handleClose = () => {
    onCloseTweet();
  }

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setProfilePicture(file);
  };

  return (
    <div className="write-tweet-container">
      <div className="profile-icon">
        {profilePicture ? (
          <img
            src={URL.createObjectURL(profilePicture)}
            alt="Profile Icon"
            className="uploaded-profile-icon"
          />
        ) : (
          <FaUserCircle className="default-profile-icon" />
        )}
      </div>
      <button
        className="add-icon"
        onClick={() => fileInputRef.current.click()}
      >
        <FaPlus />
      </button>
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
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSubmit} className="tweet-button">
        Tweet
      </button>
      <button className='tweet-button' onClick={handleClose}>
        Close
      </button>
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileUpload}
      />
    </div>
  );
};

export default WriteTweet;
