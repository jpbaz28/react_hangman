import { Typography } from '@mui/material';
import './MissCounter.css';

export default function MissCounter(props: { numMisses: number }) {
  return (
    <div>
      <Typography variant="subtitle1" justifyContent={'center'}>
        Number of Misses
      </Typography>
      <Typography variant="h5" justifyContent={'center'}>
        {props.numMisses}
      </Typography>
    </div>
  );
}
