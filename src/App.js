import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Homepage, CounterButtonPage, PeopleListPage} from './pages/'
import './App.css';
import { ProtectedPage } from './pages/ProtectedPage';


function App() {
  
  return (
    <Router>
      <div className="App">
        <Link to='/'>Home</Link>
        <Link to='/counter'>Counter</Link>
        <Link to='/list'>People</Link>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/counter" element={<CounterButtonPage />} />
          <Route path="/list" element={<PeopleListPage />} />
          <Route path="/protected" element={<ProtectedPage />} />          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
