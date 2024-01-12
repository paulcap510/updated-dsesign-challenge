import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPeopleGroup,
  faUsers,
  faBasketShopping,
  faEnvelope,
  faComments,
  faPaste,
  faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
import UserContext from './UserContext';

export default function Navbar({ onLinkClick }) {
  const [activeLink, setActiveLink] = useState('');
  const navigate = useNavigate();
  const { setUsername: setGlobalUsername } = useContext(UserContext);

  const handleLogout = () => {
    setGlobalUsername(null); // Clear the global username
    navigate('/'); // Navigate to the home page
  };

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
    onLinkClick(linkName);

    // link to survey page if clicked
    if (linkName === 'Survey') {
      navigate('/survey');
    }
  };

  const { username } = useContext(UserContext);

  return (
    <div className="navbar">
      <div className="logo">COMPANY</div>
      {username && (
        <div className="welcome-message">
          Welcome, <strong>{username}</strong>!
        </div>
      )}
      <div className="nav-links">
        <button
          className={`nav-button ${activeLink === 'Patients' ? 'active' : ''}`}
          onClick={() => handleLinkClick('Patients')}
        >
          <FontAwesomeIcon icon={faPeopleGroup} />
          <span>Patients</span>
        </button>
        <button
          className={`nav-button ${activeLink === 'Link 2' ? 'active' : ''}`}
          onClick={() => handleLinkClick('Link 2')}
        >
          <FontAwesomeIcon icon={faUsers} />
          <span>Resources</span>
        </button>
        <button
          className={`nav-button ${activeLink === 'Shop' ? 'active' : ''}`}
          onClick={() => handleLinkClick('Shop')}
        >
          <FontAwesomeIcon icon={faBasketShopping} />
          <span>Shop</span>
        </button>
        <button
          className={`nav-button ${activeLink === 'Link 4' ? 'active' : ''}`}
          onClick={() => handleLinkClick('Link 4')}
        >
          <FontAwesomeIcon icon={faEnvelope} />
          <span>Notices</span>
        </button>
        <button
          className={`nav-button ${activeLink === 'Link 7' ? 'active' : ''}`}
          onClick={() => handleLinkClick('Link 7')}
        >
          <FontAwesomeIcon icon={faComments} />
          <span>Forum</span>
        </button>
        <button
          className={`nav-button ${activeLink === 'Link 6' ? 'active' : ''}`}
          onClick={() => handleLinkClick('Survey')}
        >
          <FontAwesomeIcon icon={faPaste} />
          <span>Survey</span>
        </button>

        {username && (
          <div className="logout-div">
            <button className="nav-button" onClick={handleLogout}>
              <FontAwesomeIcon icon={faArrowRightFromBracket} />
              <span>Logout</span>
            </button>{' '}
          </div>
        )}
      </div>
    </div>
  );
}
