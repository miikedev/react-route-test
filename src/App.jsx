import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import FortuneTeller from './components/FortuneTeller';
import PrivateRouter from './components/PrivateRouter';
import "./App.css"
import { Navigate } from 'react-router-dom';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/fortuneTeller" element={<FortuneTeller />} />
        <Route
          path="/dashboard"
          element={<PrivateRouter element={<FortuneTeller />  } isAuthenticated={isLoggedIn} />}
        />
      </Routes>
    </Router>
  )
  
};

export default App;
