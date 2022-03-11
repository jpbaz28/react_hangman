import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GamePage from './components/gamepage/GamePage';
import HomePage from './components/homepage/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/game" element={<GamePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
