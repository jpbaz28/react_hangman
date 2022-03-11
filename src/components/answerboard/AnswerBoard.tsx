import './AnswerBoard.css';

export default function AnswerBoard(props: { answer: string; guess: string }) {
  return (
    <div className="answerboard-wrapper">
      <p>{props.answer}</p>
    </div>
  );
}
