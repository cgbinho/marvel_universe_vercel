import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { Divider } from '@mui/material';
import { MarvelLogo } from '../MarvelLogo';

export function Hero() {
  return (
    <Grid mb={8} sx={{ textAlign: 'center' }}>
      <Typography
        variant="h4"
        component="h1"
        fontWeight="700"
        gutterBottom>
        WELCOME TO THE MARVEL UNIVERSE!
      </Typography>

      <Divider variant="fullWidth" />

      <Typography
        variant="subtitle1"
        component="p"
        gutterBottom
      >
        Here you can find everything about your favorite heroes and their journeys.
      </Typography>
    </Grid>
  )
}