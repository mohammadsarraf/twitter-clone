import React from 'react';
import { FaUserCircle, FaHeart, FaCloud, FaRetweet, FaArrowDown, FaEllipsisH, FaUser} from 'react-icons/fa';
import './TweetBox.css'; // Import the CSS file for the component

const TweetBox = ({username, content, timeAgo}) => {
    const replacedContent = content.replace(/\n/g, '<br />'); // Replace newline characters with <br /> tags
    const isHTMLContent = replacedContent.includes('<br />'); // Check if the content contains HTML tags
    // console.log(timeStamp)
    return (
        <div className="tweet-box">
            <div className="profile-picture"></div>
            <div className="tweet-content">
                <div className="user-info">
                    <div className="user-names">
                        <div>
                            <span className="username">{username}</span>
                            <span className="handle">@{username.toLowerCase()} </span>
                            <span className="time">{timeAgo}</span>
                        </div>
                        <div className="dropdown-button">
                            <FaEllipsisH className="icon dropdown-icon" />
                        </div>
                    </div>
                </div>

                {isHTMLContent ? (
                    <p
                        className="tweet-text"
                        dangerouslySetInnerHTML={{ __html: replacedContent }}
                    />
                ) : (
                    <p className="tweet-text">{content}</p>
                )}

                <div className="tweet-icons">
                    <FaHeart className="heart-icon" />
                    <FaCloud className="cloud-icon" />
                    <FaRetweet className="retweet-icon" />
                </div>
            </div>
        </div>
    );
};

export default TweetBox;
