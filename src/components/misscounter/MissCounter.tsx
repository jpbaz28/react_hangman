import './MissCounter.css';

export default function MissCounter(props: { numMisses: number }) {
  return (
    <div>
      <h2 className="miss-title">Number of Misses</h2>
      <h1 className="miss-counter">{props.numMisses}</h1>
    </div>
  );
}
