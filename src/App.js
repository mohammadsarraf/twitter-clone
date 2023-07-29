// import React, {useState} from "react";
// import './App.css'
// import { RiMenuLine, RiHomeLine, RiContactsLine, RiUserLine } from 'react-icons/ri';
// import SignInPage from './Components/SignInPage'

// const App = () => {
//   const [showSignInPage, setShowSignInPage] = useState(false)

//   const handleSignIn = () => {
//     setShowSignInPage(!showSignInPage)
//   }

//   return(
//     <div className="App">
//       {showSignInPage ? (
//         <div>
//           <button className="navbar-button" onClick={handleSignIn}>
//             <span><RiMenuLine /></span>
//           </button>
//           <SignInPage />
//         </div>
//       ):(
//         <div>
//           <button className="navbar-button" onClick={handleSignIn}>
//             <span><RiMenuLine /></span>
//           </button>

//         </div>
//       )}
//     </div>
//   )
// };

// export default App;

import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Tweet from './Components/Tweet';
import SearchBar from './Components/SearchBar';
import SignInPage from './Components/SignInPage'; // Import the SignInPage component
//Firebase
import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, setDoc, addDoc, getDocs } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';


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
  const handleSignIn = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      setUser(user);

      // Close the SignInPage and redirect to main page
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
        timestamp: new Date().toISOString(), // Add a timestamp for the tweet
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

  return (
    <div className="App">
      {showSignInPage ? (
        <SignInPage onSignIn={handleSignIn} onClose={() => setShowSignInPage(false)} />
      ) : (
        <>
          <Navbar isExpanded={isExpanded} onToggle={toggleNavbar} onSignIn={() => setShowSignInPage(true)} />
          <SearchBar isExpanded={isExpanded} onAddTweet={addTweet} />

          <div className="tweets-container">
            {tweetsData.map((tweet) => {
              return <Tweet key={tweet.tId} username={tweet.username} content={tweet.content} />;
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default App;
