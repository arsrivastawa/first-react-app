import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './components/Fonts.css';
import Header from './components/Header';
import TaskAdder from './components/TaskAdder';
import Tasks from './components/Tasks';
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Tasks />} />
          <Route path="/default" element={<Tasks />} />
        </Routes>
        <TaskAdder />
      </Router>
    </>
  );
}

export default App;
