import { useState } from 'react';
import './AlphaButtons.css';

export default function AlphaButtons(props: {
  guess: string;
  mask: string;
  answer: string;
  setGuess: Function;
  setMask: Function;
}) {
  const [guessLetter, setGuessLetter] = useState<string>('');
  function searchLetter() {
    setGuessLetter(props.guess);
    if (props.answer.includes(guessLetter)) {
      let str = '';
      for (const char of props.answer) {
        str += char;
      }
      props.setMask(str);
      // }
    }
  }
  return (
    <button className="button" onClick={searchLetter}>
      {props.guess}
    </button>
  );
}
