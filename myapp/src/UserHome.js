import React, { useState } from 'react';
import './UserHome.css';
import Navbar from './Navbar';
import Search from './Search';
import Patients from './Patients';
import Shop from './Shop';
import SearchResults from './SearchResults';
import data from './Data.json';

export default function UserHome() {
  const [currentComponent, setCurrentComponent] = useState('Patients');
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    const filteredData = data.filter((user) =>
      `${user.First} ${user.Last}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredData);
    setCurrentComponent('SearchResults');
  };

  const handleNavbarClick = (componentName) => {
    setCurrentComponent(componentName);
  };

  const onSearch = () => {
    const filteredData = data.filter((user) =>
      `${user.First} ${user.Last}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredData);
    setCurrentComponent('SearchResults');
  };

  const renderComponent = () => {
    switch (currentComponent) {
      case 'Patients':
        return <Patients />;
      case 'Shop':
        return <Shop />;
      case 'SearchResults':
        return <SearchResults results={searchResults} />;
      default:
        return <Patients />;
    }
  };

  return (
    <div className="user-container">
      <Navbar onLinkClick={handleNavbarClick} />
      <div className="main-content">
        <Search
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          onSearch={onSearch}
        />
        {renderComponent()}
      </div>
    </div>
  );
}
