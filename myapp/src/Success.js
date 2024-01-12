import React, { useState, useContext } from 'react';
import './Success.css';
import { useNavigate } from 'react-router-dom';
import UserContext from './UserContext';

function Success() {
  const { username } = useContext(UserContext);

  const navigate = useNavigate();

  const goBackHome = () => {
    navigate('/userhome');
  };

  return (
    <div className="success-container">
      <div className="success-content">
        <h1>Thank you {username}!</h1>
        <div className="success-message">
          <span className="check-mark">✓</span>
          <h5>Your form was submitted successfully.</h5>
        </div>
        <p>We will reply to you soon. Check out our site in the meantime.</p>
        <div className="back-home">
          <button onClick={goBackHome} className="home-button">
            BACK HOME
          </button>
        </div>
      </div>
    </div>
  );
}

export default Success;
