import React from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

const CounterTitle = (): JSX.Element => (
  <Grid container justifyContent="center" alignItems="center" direction="row">
    <Grid item>
      <Typography variant="h6" align="left" gutterBottom>
        Oni i ponad 4000 użytkowników
      </Typography>
      <Typography variant="subtitle2" gutterBottom paragraph align="left">
        Znaleźli już pomoc!
      </Typography>
    </Grid>
  </Grid>
)

export default CounterTitle
