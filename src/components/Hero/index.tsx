import { Box, Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import * as React from 'react';

export function Hero() {
  return (
    <Grid mb={8} sx={{ textAlign: 'center' }}>
      <Typography
        variant="h4"
        component="h1"
        fontWeight="700"
        gutterBottom
      >
        WELCOME TO THE MARVEL UNIVERSE!
      </Typography>

      <Box component='hr' maxWidth={1200} sx={{
        border: "none",
        height: "5px",
        backgroundColor: "red",
        borderRadius: '50%'
      }}>

      </Box>
      {/* <Divider variant="fullWidth" sx={{}} /> */}

      <Typography
        variant="subtitle1"
        component="p"
        gutterBottom
      >
        Here you can find everything about your favorite heroes and their journeys.
      </Typography>
    </Grid >
  )
}