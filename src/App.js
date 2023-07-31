// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import './App.css'
// import LoginPage from './Components/LoginPage'
// import Navbar from './Components/Navbar';
// import TweetBox from "./Components/TweetBox";

// const App = () => {
//   return (
//     <div className="App">
//       <TweetBox username={`MSTR2000`}content={`🔥Hot Take🔥

// I love the standard Mail app in iOS. 

// It’s simple, clean, and minimal. It works. 

// I’m afraid to ask… but why do so many people hate it?`}/>
//     </div>
//   );
// };

// export default App;


import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Tweet from './Components/Tweet';
import TweetBox from './Components/TweetBox';
import SearchBar from './Components/SearchBar';
import LoginPage from './Components/LoginPage'; // Import the SignInPage component
//Firebase
import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, setDoc, addDoc, getDocs, serverTimestamp  } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'; // Import necessary components from React Router



// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfGtvjHibH_VQNi3fIFxoJEI-_RzbrHCw",
  authDomain: "twitter-clone-10996.firebaseapp.com",
  projectId: "twitter-clone-10996",
  storageBucket: "twitter-clone-10996.appspot.com",
  messagingSenderId: "617659631276",
  appId: "1:617659631276:web:5b7c960e3c95a695244109",
  measurementId: "G-GPSBENLM67"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);


// ...

const App = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [tweets, setTweets] = useState([]);
  const [userTweets, setUserTweets] = useState({ counter: 0 }); // Initialize with an empty object
  const [tweetsData, setTweetsData] = useState([]); // Store the actual tweets here
  // State for user authentication
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showSignInPage, setShowSignInPage] = useState(false); // State to control the visibility of SignInPage

  // Function to handle user sign-up
  // Function to handle user sign-up
  const handleSignUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      setUser(user);

      // Close the SignInPage and redirect to the main page
      setShowSignInPage(false);
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };
  
  // Function to handle user sign-in
// Function to handle user sign-in
const handleSignIn = async () => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    setUser(user);

    // Set isExpanded to true to show the expanded navbar, including the "usericon" link
    setIsExpanded(true);

    // Close the SignInPage
    setShowSignInPage(false);
  } catch (error) {
    console.error('Error signing in:', error);
  }
};

  
  // Function to handle user sign-out
  const handleSignOut = () => {
    setUser(null);
  };
  
  // ...

  const fetchTweets = async () => {
    try {
      const tweetsSnapshot = await getDocs(collection(db, "tweets"));

      const tweetsArray = [];
      tweetsSnapshot.forEach((doc) => {
        const tweetData = doc.data();
        tweetData.tId = doc.id; // Add the tweetId to the tweet data
        tweetsArray.push(tweetData);
      });

      // Sort the tweets in reverse chronological order (newest to oldest)
      tweetsArray.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

      setTweetsData(tweetsArray);
    } catch (error) {
      console.error("Error fetching tweets:", error);
    }
  };

  useEffect(() => {
    // Fetch all tweets from the database on mount
    fetchTweets();
  }, []); // Only run this once on mount

  // ...

  const addTweet = async (username, content) => {
    if (username && content) {
      const newTweet = {
        username,
        content,
        timestamp: serverTimestamp(), // Add a timestamp for the tweet
      };
      
      // Add the new tweet to the "tweets" collection
      const tweetRef = await addDoc(collection(db, "tweets"), newTweet);
  
      // Get the auto-generated tweetId from the "tweets" collection
      const tweetId = tweetRef.id;
  
      // Add the tweet to the user's "userTweets" subcollection
      const userTweetsRef = collection(db, "users", username, "userTweets");
      await setDoc(doc(userTweetsRef, tweetId), newTweet);
  
      // Update the user's tweet counter and update it in the database
      await setDoc(doc(db, "tweetCounters", "user_tweet_counter"), {
        counter: userTweets.counter + 1,
      });
  
      // Update the tweets state with the new tweet data
      setTweetsData([newTweet, ...tweetsData]); // Prepend the new tweet to the array
    }
  };
  

  const toggleNavbar = () => {
    setIsExpanded(!isExpanded);
  };

  const HomePage = () => {
    return(
    <div className='App'>
      <>
        <Navbar isExpanded={isExpanded} onToggle={toggleNavbar} onSignIn={() => setShowSignInPage(true)} />
        <SearchBar isExpanded={isExpanded} onAddTweet={addTweet} />

        <div className="tweets-container">
          {tweetsData.map((tweet) => {
            const jsDate = (tweet.timestamp); // Convert the timestamp to a Date object
            const timeAgo = calcTimeStamp(jsDate);
            return <TweetBox key={tweet.tId} username={tweet.username} content={tweet.content} timeAgo={timeAgo} />;
          })}
        </div>

      </>
    </div>
    )
  }

  const calcTimeStamp = (timestampString) => {
    const timestamp = new Date(timestampString); // Convert the timestampString to a Date object
    const now = new Date(); // Get the current Date object
    const timeDifference = now - timestamp;
  
    
    // Check for future timestamps
    if (timeDifference < 0) {
      return "In the future";
    }
    
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    
    if (days > 0) {
      return `${days} day${days === 1 ? '' : 's'} ago`;
    } else if (hours > 0) {
      return `${hours} h${hours === 1 ? '' : 's'} ago`;
    } else if (minutes > 0) {
      return `${minutes} min${minutes === 1 ? '' : 's'} ago`;
    } else {
      return `${seconds} s${seconds === 1 ? '' : 's'} ago`;
    }
  };
  
  return (
    <Router>
      <div className='App'>
        <Navbar isExpanded={isExpanded} onToggle={toggleNavbar} onSignIn={() => setShowSignInPage(true)} />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
