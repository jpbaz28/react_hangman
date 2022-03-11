import './AlphaButtons.css';

export default function AlphaButtons(props: { alpha: string }) {
  function searchLetter() {}
  return (
    <button className="button" onClick={searchLetter}>
      {props.alpha}
    </button>
  );
}
