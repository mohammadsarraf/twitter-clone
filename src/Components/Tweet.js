import React from 'react';
import { FaUserCircle, FaHeart, FaCloud, FaRetweet } from 'react-icons/fa';
import './Tweet.css';

const Tweet = ({ username, content }) => {
  const replacedContent = content.replace(/\n/g, '<br />'); // Replace newline characters with <br /> tags
  const isHTMLContent = replacedContent.includes('<br />'); // Check if the content contains HTML tags

  return (
    <div className="tweet">
      <div className="profile-picture">
        <FaUserCircle className="profile-icon" />
      </div>
      <div className="vertical-line"></div>
      <div className="tweet-content">
        <div className="username">{username}</div>
        {isHTMLContent ? (
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: replacedContent }}
          />
        ) : (
          <div className="content">{content}</div>
        )}
        <div className="content-pic"></div>
        <div className="icons">
          <FaHeart className="heart-icon" />
          <FaCloud className="cloud-icon" />
          <FaRetweet className="retweet-icon" />
        </div>
      </div>
    </div>
  );
};

export default Tweet;
