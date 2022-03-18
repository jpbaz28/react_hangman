import { useEffect, useState } from 'react';
import AlphaButtons from '../alphabuttons/AlphaButtons';
import AnswerBoard from '../answerboard/AnswerBoard';
import DrawScreen from '../drawscreen/DrawScreen';
import './GamePage.css';

export default function GamePage() {
  // prettier-ignore
  const [alphabet] = useState<string[]>([
    'A','B','C','D','E','F','G','H','I','J',
    'K','L','M','N','O','P','Q','R','S','T',
    'U','V','W','X','Y','Z',
  ]);
  const [guessLetter, setGuessLetter] = useState<string>('');
  const [answerWord, setAnswerWord] = useState<string>('gang');
  const [mask, setMask] = useState<string>('');
  useEffect(() => {
    setMask(answerWord.replace(/([A-Za-z])/gi, '*'));
  }, [answerWord]);
  return (
    <div className="gamepage-wrapper">
      <h1>Game Page</h1>
      <AnswerBoard
        answer={answerWord}
        setAnswer={setAnswerWord}
        guess={guessLetter}
        mask={mask}
      />
      <div>
        {alphabet.map((alpha) => (
          <AlphaButtons
            guess={alpha}
            mask={mask}
            answer={answerWord}
            setGuess={setGuessLetter}
            setMask={setMask}
          />
        ))}
      </div>
      <DrawScreen />
    </div>
  );
}
