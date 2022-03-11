import { useNavigate } from 'react-router-dom';
import './HomePage.css';

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <>
      <div className="homepage-wrapper">
        <h1>Play Hangman!</h1>
        <button onClick={() => navigate('/game')}>Start New Game</button>
      </div>
    </>
  );
}
