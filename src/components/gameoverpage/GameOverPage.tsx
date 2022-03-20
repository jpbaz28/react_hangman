export default function GameOverPage(props: {
  answer: string;
  definition: string;
}) {
  return (
    <div>
      <h1>Game Over!</h1>
      <h2>The word was: {props.answer}</h2>
      <h2>Definition: {props.definition}</h2>
      <svg width={500} height={500}>
        <line x1={125} y1={500} x2={125} y2={100} stroke="black" />
        <line x1={125} y1={100} x2={250} y2={100} stroke="black" />
        <line x1={250} y1={100} x2={250} y2={150} stroke="black" />
        <circle cx={250} cy={150} r={30} />
        <line x1={250} y1={150} x2={250} y2={300} stroke="black" />
        <line x1={250} y1={300} x2={300} y2={400} stroke="black" />
        <line x1={250} y1={300} x2={200} y2={400} stroke="black" />
        <line x1={250} y1={200} x2={325} y2={250} stroke="black" />
        <line x1={250} y1={200} x2={175} y2={250} stroke="black" />
      </svg>
    </div>
  );
}
