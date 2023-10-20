import { useState } from 'react';
import BigButton from '../components/BigButton';
import FactBox from '../components/FactBox';
import { Typography, Grid } from '@mui/material';

function App() {
  const [fact, setFact] = useState('');
  const [message, setMessage] = useState('Click me to get a fact!');

  async function generate() {
    const response = await fetch('https://api.chucknorris.io/jokes/random');
    const data = await response.json();

    setFact(data.value);
    setMessage('This message will self destruct in 5 seconds ...');

    setTimeout(() => {
      setFact('');
      setMessage('Click for a new message.');
    }, 5000);
  }

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      spacing={5}
      sx={{ minHeight: '90vh' }}
    >
      <Grid item>
        <Typography variant="h3">Welcome to Chuck Norris' world!</Typography>
      </Grid>
      <Grid item>
        <BigButton generate={generate} />
      </Grid>
      <Grid item>
        <FactBox fact={fact} message={message} />
      </Grid>
    </Grid>
  );
}

export default App;
