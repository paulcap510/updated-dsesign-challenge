import React, { useState, useEffect } from 'react';
import './CreateNew.css';
import { useNavigate, useLocation } from 'react-router-dom';

export default function CreateNew() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isExiting, setIsExiting] = useState(false);
  const searchParams = new URLSearchParams(location.search);
  const animation = searchParams.get('animation');

  useEffect(() => {
    if (animation === 'slideup') {
      const container = document.querySelector('.createNewContainer');
      if (container) {
        container.classList.add('createSlideUp');
      }
    }
  }, [animation]);

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(() => navigate(-1), 300);
  };

  return (
    <div className={`createNewContainer ${isExiting ? 'createExiting' : ''}`}>
      <div className="form-container">
        <button className="close-button" onClick={handleClose}>
          X
        </button>
        <h1>Create New Patient</h1>
        <form>
          <label htmlFor="firstName">First Name*</label>
          <input type="text" id="firstName" placeholder="First Name" />

          <label htmlFor="lastName">Last Name*</label>
          <input type="text" id="lastName" placeholder="Last Name" />

          <label htmlFor="email">Email*</label>
          <input type="email" id="email" placeholder="example@mail.com" />

          <label htmlFor="phoneNumber">Phone Number</label>
          <input type="tel" id="phoneNumber" placeholder="123-456-7890" />

          <button type="submit" className="add-button">
            ADD PATIENT
          </button>
        </form>
      </div>
    </div>
  );
}
