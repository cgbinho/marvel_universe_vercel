import * as React from 'react';
import Image from 'next/image'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Divider } from '@mui/material';

export function Hero() {
  return (
    <Box sx={{ my: 6, textAlign: 'center' }}>
      <Box sx={{ maxWidth: '200px', margin: '0 auto', marginBottom: '1rem' }}>
        <Image
          alt="Marvel Logo"
          src={`/images/marvel_logo.svg`}
          layout="fixed"
          width={"200px"}
          height={"80px"}
        />
      </Box>

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
    </Box>
  )
}