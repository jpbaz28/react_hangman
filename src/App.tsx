import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GamePage from './components/gamepage/GamePage';
import HomePage from './components/homepage/HomePage';
import '@fontsource/roboto/400.css';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material';

function App() {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/game" element={<GamePage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

