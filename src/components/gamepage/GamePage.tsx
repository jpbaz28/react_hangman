import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AlphaButtons from '../alphabuttons/AlphaButtons';
import AnswerBoard from '../answerboard/AnswerBoard';
import DrawScreen from '../drawscreen/DrawScreen';
import './GamePage.css';
import '@fontsource/roboto/400.css';
import { Button, Container, Typography } from '@mui/material';

interface WordObject {
  word: string;
  definition: string;
  pronunciation: string;
}

export default function GamePage() {
  // prettier-ignore
  const [letterList, setLetterList] = useState<string[]>([
    'A','B','C','D','E','F','G','H','I','J',
    'K','L','M','N','O','P','Q','R','S','T',
    'U','V','W','X','Y','Z',
  ]);
  const [answer, setAnswer] = useState<string>('gangster');
  const [definition, setDefinition] = useState<string>('gangster');
  const [mask, setMask] = useState<string>('');
  const [numMisses, setNumMisses] = useState<number>(0);
  const navigate = useNavigate();
  useEffect(() => {
    getRandomWord();
  }, []);

  useEffect(() => {
    setMask(answer.replace(/([A-Za-z])/gi, '*'));
    setNumMisses(0);
    // prettier-ignore
    setLetterList([
    'A','B','C','D','E','F','G','H','I','J',
    'K','L','M','N','O','P','Q','R','S','T',
    'U','V','W','X','Y','Z',
  ])
  }, [answer]);

  async function getRandomWord() {
    try {
      const response: AxiosResponse = await axios.get(
        `https://random-words-api.vercel.app/word`
      );
      const wordObj: WordObject[] = await response.data;
      setAnswer(wordObj[0].word);
      setDefinition(wordObj[0].definition);
    } catch (error) {
      console.log(error);
    }
  }
  if (numMisses < 9 && mask.includes('*')) {
    return (
      <Container maxWidth="md">
        <div>
          <div style={{ textAlign: 'center' }}>
            <Typography variant="h2" component="h1">
              Guess the Word!
            </Typography>
          </div>
          <div style={{ textAlign: 'center' }}>
            <AnswerBoard mask={mask} />
          </div>
          <div style={{ textAlign: 'center' }}>
            {letterList.map((letter) => (
              <AlphaButtons
                letter={letter}
                letterList={letterList}
                mask={mask}
                answer={answer}
                numMisses={numMisses}
                setMask={setMask}
                setNumMisses={setNumMisses}
                setLetterList={setLetterList}
                key={letter}
              />
            ))}
          </div>
          <div>
            <Container maxWidth="sm">
              <DrawScreen numMisses={numMisses} />
            </Container>
          </div>
        </div>
      </Container>
    );
  } else if (numMisses < 9) {
    return (
      <div className="gamepage-wrapper">
        <Button variant="contained" onClick={() => navigate('/')}>
          Start New Game
        </Button>
        <h1>You Won in {numMisses} moves!</h1>
        <h2>The word was: {answer}</h2>
        <h2>Definition: {definition}</h2>
        <DrawScreen numMisses={numMisses} />
      </div>
    );
  } else if (numMisses >= 9 && mask.includes('*')) {
    return (
      <div className="gamepage-wrapper">
        <h1>You Monster!</h1>
        <h2>The word was: {answer}</h2>
        <h2>Definition: {definition}</h2>
        <DrawScreen numMisses={numMisses} />
        <Button variant="contained" onClick={() => navigate('/')}>
          Start New Game
        </Button>
      </div>
    );
  } else {
    return (
      <div className="gamepage-wrapper">
        <h1>Hey</h1>
      </div>
    );
  }
}
