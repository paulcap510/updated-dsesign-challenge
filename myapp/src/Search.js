import React from 'react';
import './Search.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faSearch } from '@fortawesome/free-solid-svg-icons';

export default function Search({ searchTerm, setSearchTerm, onSearch }) {
  const navigate = useNavigate();

  const handleAddPatientClick = () => {
    navigate('/create?animation=slideup');
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearch();
  };

  return (
    <div className="search-component">
      <form onSubmit={handleSearchSubmit} className="search-form">
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
        <input
          type="search"
          id="search-input"
          placeholder="Find patient"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button type="submit" className="search-icon-button">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>
      <button onClick={handleAddPatientClick} className="button-style">
        <FontAwesomeIcon icon={faUserPlus} className="fa-icon" />
        Add Patient
      </button>
    </div>
  );
}
