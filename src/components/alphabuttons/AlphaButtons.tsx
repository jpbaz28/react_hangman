import { useState } from 'react';
import './AlphaButtons.css';

export default function AlphaButtons(props: {
  letter: string;
  letterList: string[];
  mask: string;
  answer: string;
  setLetterList: Function;
  numMisses: number;
  setMask: Function;
  setNumMisses: Function;
}) {
  const [guessLetter] = useState<string>(props.letter);
  function searchLetter() {
    let str = '';
    props.letterList.splice(props.letterList.indexOf(props.letter), 1);
    props.setLetterList(props.letterList);
    if (props.answer.toUpperCase().includes(guessLetter)) {
      for (let i = 0; i < props.answer.length; i++) {
        if (props.answer[i].toUpperCase() === guessLetter) {
          str += props.answer[i];
        } else {
          str += props.mask[i];
        }
      }
      props.setMask(str);
    } else {
      props.setNumMisses(props.numMisses + 1);
    }
  }
  return (
    <button className="button" onClick={searchLetter}>
      {props.letter}
    </button>
  );
}
