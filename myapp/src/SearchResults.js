import React from 'react';
import './SearchResults.css';

const SearchResults = ({ results }) => {
  return (
    <div className="patients-container">
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Clinic No</th>
            <th>Insurance No</th>
            <th>Doctor Name</th>
            <th>Date Modified</th>
          </tr>
        </thead>
        <tbody>
          {results.map((user, index) => (
            <tr key={index}>
              <td>{user.First}</td>
              <td>{user.Last}</td>
              <td>{user.ClinicNo}</td>
              <td>{user.InsuranceNo}</td>
              <td>{user['Dr Name']}</td>
              <td>{user['Date Modified']}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
