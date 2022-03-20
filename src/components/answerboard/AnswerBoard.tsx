import './AnswerBoard.css';

export default function AnswerBoard(props: { mask: string }) {
  return (
    <div className="answerboard-wrapper">
      <p>{props.mask}</p>
    </div>
  );
}
