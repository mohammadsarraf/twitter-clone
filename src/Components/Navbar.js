import React from 'react';
import { RiMenuLine, RiHomeLine, RiContactsLine, RiUserLine } from 'react-icons/ri';
import './Navbar.css'; // Import the CSS file for the component
import { Link } from 'react-router-dom'; // Import Link component from React Router

const Navbar = ({ isExpanded, onToggle, onSignIn }) => {

  return (
    <div className={isExpanded ? ('navbar') : ('navbar-folded')}>
      <button className="navbar-button" onClick={onToggle}>
        <span><RiMenuLine /></span>
      </button>
      {isExpanded ? (
        <>
          {/* Use Link components for navigation */}
          <Link to="/" className="navbar-button" style={{ textDecoration: 'none' }}>
            <span><RiHomeLine /></span>
            Home
          </Link>

          <Link to="/about" className="navbar-button" style={{ textDecoration: 'none' }} >
            <span><RiContactsLine /></span>
            About
          </Link>

          <Link to="/login" className="navbar-button" style={{ textDecoration: 'none' }}>
            <span><RiUserLine /></span>
          </Link>
        </>
      ) : (
        <>
          <Link to="/" className="navbar-button-folded">
            <span><RiHomeLine /></span>
            
          </Link>

          <Link to="/about" className="navbar-button-folded">
            <span><RiContactsLine /></span>
            
          </Link>

          <Link to="/login" className="navbar-button-folded">
            <span><RiUserLine /></span>
          </Link>
        </>
      )}
    </div>
  );
};

export default Navbar;