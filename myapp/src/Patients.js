import React from 'react';
import patientData from './Data.json';
import './Patients.css';

export default function Patients() {
  return (
    <div class="patients-container">
      <h1>Clients</h1>
      <table>
        <thead>
          <tr>
            <th>First</th>
            <th>Last</th>
            <th>ClinicNo</th>
            <th>InsuranceNo</th>
            <th>Dr Name</th>
            <th>Date Modified</th>
          </tr>
        </thead>
        <tbody>
          {patientData.map((patient, index) => (
            <tr key={index}>
              <td>{patient.First}</td>
              <td>{patient.Last}</td>
              <td>{patient.ClinicNo}</td>
              <td>{patient.InsuranceNo}</td>
              <td>{patient['Dr Name']}</td>
              <td>{patient['Date Modified']}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
