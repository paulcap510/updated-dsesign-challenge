import React, { useState, useContext } from 'react';
import UserContext from './UserContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './index.css';

export default function Landing() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordShown, setPasswordShown] = useState(false);
  const navigate = useNavigate();
  const { setUsername: setGlobalUsername } = useContext(UserContext);

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:5000/users/login', {
        username,
        password,
      });

      // Set username in context
      setGlobalUsername(username);
      navigate('/userhome');
    } catch (error) {
      console.error('Login error:', error.response?.data || error.message);
    }
  };

  return (
    <div className="landingContainer">
      <div className="form-container">
        <h1>COMPANY</h1>
        <form onSubmit={handleLogin}>
          <label htmlFor="username">Username</label>
          <div className="input-fields">
            <input
              className="input-field"
              type="text"
              id="username"
              placeholder="example@gmail.com"
              value={username}
              onChange={(e) => setUsername(e.target.value)} // Corrected from setusername to setUsername
            />
          </div>

          <label htmlFor="password">Password</label>
          <div className="input-fields">
            <input
              className="input-field"
              type={passwordShown ? 'text' : 'password'}
              id="password"
              placeholder="••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <i
              onClick={togglePasswordVisibility}
              className={`fa icon ${passwordShown ? 'fa-eye-slash' : 'fa-eye'}`}
            ></i>
          </div>

          <a href="#" className="forgot-password-link">
            Forgot password?
          </a>
          <button type="submit" className="button">
            LOG IN
          </button>
        </form>
      </div>
    </div>
  );
}
