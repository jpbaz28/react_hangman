import { useState } from 'react';
import './AlphaButtons.css';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material';
import { yellow } from '@mui/material/colors';

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
  const theme = createTheme({
    palette: {
      primary: {
        main: yellow[500],
      },
    },
    typography: {
      fontFamily: "'Gloria Hallelujah', cursive",
      fontSize: 20,
      fontWeightMedium: 900,
    },
  });
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
    <ThemeProvider theme={theme}>
      <Button
        variant="contained"
        onClick={searchLetter}
        style={{
          margin: 14,
          padding: 15,
          border: 4,
          borderColor: 'black',
          borderStyle: 'outset',
        }}>
        {props.letter}
      </Button>
    </ThemeProvider>
  );
}
