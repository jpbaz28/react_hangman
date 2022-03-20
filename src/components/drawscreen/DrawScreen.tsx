import './DrawScreen.css';

/**
 * This component incrementally draws in a stickfigure with svg based on the number of missed letters
 * Uses a switch statement t0 draw based on the numMisses stateful variable
 * @param props: {numMisses:}
 * @returns tsx
 */
export default function DrawScreen(props: { numMisses: number }) {
  switch (props.numMisses) {
    case 0:
      return (
        <div className="screen-wrap">
          <svg width={500} height={500}></svg>
        </div>
      );
    case 1:
      return (
        <div className="screen-wrap">
          <svg width={500} height={500}>
            <line x1={125} y1={500} x2={125} y2={100} stroke="black" />
          </svg>
        </div>
      );
    case 2:
      return (
        <div className="screen-wrap">
          <svg width={500} height={500}>
            <line x1={125} y1={500} x2={125} y2={100} stroke="black" />
            <line x1={125} y1={100} x2={250} y2={100} stroke="black" />
          </svg>
        </div>
      );
    case 3:
      return (
        <div className="screen-wrap">
          <svg width={500} height={500}>
            <line x1={125} y1={500} x2={125} y2={100} stroke="black" />
            <line x1={125} y1={100} x2={250} y2={100} stroke="black" />
            <line x1={250} y1={100} x2={250} y2={150} stroke="black" />
          </svg>
        </div>
      );
    case 4:
      return (
        <div className="screen-wrap">
          <svg width={500} height={500}>
            <line x1={125} y1={500} x2={125} y2={100} stroke="black" />
            <line x1={125} y1={100} x2={250} y2={100} stroke="black" />
            <line x1={250} y1={100} x2={250} y2={150} stroke="black" />
            <circle cx={250} cy={150} r={30} />
          </svg>
        </div>
      );
    case 5:
      return (
        <div className="screen-wrap">
          <svg width={500} height={500}>
            <line x1={125} y1={500} x2={125} y2={100} stroke="black" />
            <line x1={125} y1={100} x2={250} y2={100} stroke="black" />
            <line x1={250} y1={100} x2={250} y2={150} stroke="black" />
            <circle cx={250} cy={150} r={30} />
            <line x1={250} y1={150} x2={250} y2={300} stroke="black" />
          </svg>
        </div>
      );
    case 6:
      return (
        <div className="screen-wrap">
          <svg width={500} height={500}>
            <line x1={125} y1={500} x2={125} y2={100} stroke="black" />
            <line x1={125} y1={100} x2={250} y2={100} stroke="black" />
            <line x1={250} y1={100} x2={250} y2={150} stroke="black" />
            <circle cx={250} cy={150} r={30} />
            <line x1={250} y1={150} x2={250} y2={300} stroke="black" />
            <line x1={250} y1={300} x2={300} y2={400} stroke="black" />
          </svg>
        </div>
      );
    case 7:
      return (
        <div className="screen-wrap">
          <svg width={500} height={500}>
            <line x1={125} y1={500} x2={125} y2={100} stroke="black" />
            <line x1={125} y1={100} x2={250} y2={100} stroke="black" />
            <line x1={250} y1={100} x2={250} y2={150} stroke="black" />
            <circle cx={250} cy={150} r={30} />
            <line x1={250} y1={150} x2={250} y2={300} stroke="black" />
            <line x1={250} y1={300} x2={300} y2={400} stroke="black" />
            <line x1={250} y1={300} x2={200} y2={400} stroke="black" />
          </svg>
        </div>
      );
    case 8:
      return (
        <div className="screen-wrap">
          <svg width={500} height={500}>
            <line x1={125} y1={500} x2={125} y2={100} stroke="black" />
            <line x1={125} y1={100} x2={250} y2={100} stroke="black" />
            <line x1={250} y1={100} x2={250} y2={150} stroke="black" />
            <circle cx={250} cy={150} r={30} />
            <line x1={250} y1={150} x2={250} y2={300} stroke="black" />
            <line x1={250} y1={300} x2={300} y2={400} stroke="black" />
            <line x1={250} y1={300} x2={200} y2={400} stroke="black" />
            <line x1={250} y1={200} x2={325} y2={250} stroke="black" />
          </svg>
        </div>
      );
    case 9:
      return (
        <div className="screen-wrap">
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
    default:
      return (
        <div className="screen-wrap">
          <svg width={500} height={500}></svg>
        </div>
      );
  }
}
