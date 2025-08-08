import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ChartPage from './app/chartPage/page';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ChartPage />} />
      </Routes>
    </Router>
  );
}

export default App;
