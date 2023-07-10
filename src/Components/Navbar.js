import React from 'react';
import { RiMenuLine, RiHomeLine, RiContactsLine, RiUserLine } from 'react-icons/ri';
import './Navbar.css'; // Import the CSS file for the component

const Navbar = ({ isExpanded, onToggle }) => {
  return (
    <div className={isExpanded ? ('navbar') : ('navbar-folded')}>
      <button className="navbar-button" onClick={onToggle}>
        <span><RiMenuLine /></span>
      </button>
      {isExpanded ? (
        <>
          <button className="navbar-button">
            <span><RiHomeLine /></span>
            Home
          </button>
          <button className="navbar-button">
            <span><RiContactsLine /></span>
            Contact
          </button>
          <button className="navbar-button">
            <span><RiUserLine /></span>
          </button>
        </>
      ) : (
        <>
          <button className="navbar-button-folded">
            <span><RiHomeLine /></span>
          </button>
          <button className="navbar-button-folded">
            <span><RiContactsLine /></span>
          </button>
          <button className="navbar-button-folded">
            <span><RiUserLine /></span>
          </button>
        </>
      )}
    </div>
  );
};

export default Navbar;
