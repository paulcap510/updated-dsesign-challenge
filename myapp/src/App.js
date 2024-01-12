// App.js or your main application file
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserContext from './UserContext';
import Landing from './Landing';
import UserHome from './UserHome';
import CreateNew from './CreateNew';
import Shop from './Shop';
import Survey from './Survey';
import Success from './Success';

function App() {
  const [username, setUsername] = useState(null);

  return (
    <UserContext.Provider value={{ username, setUsername }}>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/userhome" element={<UserHome />} />
          <Route path="/create" element={<CreateNew />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/survey" element={<Survey />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
