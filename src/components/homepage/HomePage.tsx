import { NavigateFunction, useNavigate } from 'react-router-dom';
import './HomePage.css';
import { Button } from '@mui/material';

export default function HomePage() {
  const navigate: NavigateFunction = useNavigate();
  return (
    <>
      <div className="homepage-wrapper">
        <h1>Play Hangman!</h1>
        <Button variant="contained" onClick={() => navigate('/game')}>
          Start New Game
        </Button>
      </div>
    </>
  );
}
