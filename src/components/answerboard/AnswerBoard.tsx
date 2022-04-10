import { Typography } from '@mui/material';
import './AnswerBoard.css';

export default function AnswerBoard(props: { mask: string }) {
  return (
    <Typography variant="h5" margin={5}>
      {props.mask}
    </Typography>
  );
}
