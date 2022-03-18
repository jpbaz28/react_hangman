import './AnswerBoard.css';

export default function AnswerBoard(props: {
  answer: string;
  setAnswer: Function;
  guess: string;
  mask: string;
}) {
  // const [mask, setMask] = useState<string>('');
  // useEffect(() => {
  //   setMask(props.answer.replace(/([A-Za-z])/gi, '*'));
  // }, [props.answer]);
  // useEffect(() => {
  //   console.log('Hey');
  //   if (props.answer.includes(props.guess)) {
  //     const regex = /props.guess/gi;
  //     let result;
  //     while ((result = regex.exec(props.answer))) {
  //       setMask(props.answer);
  //     }
  //   }
  // }, [props.guess, props.answer]);

  return (
    <div className="answerboard-wrapper">
      <p>{props.mask}</p>
    </div>
  );
}
