import * as React from 'react';
import { Box } from '@mui/material';
import { MarvelLogo } from '../MarvelLogo';

export function Navbar() {
  return (
    <Box sx={{ my: 6 }}>
      <MarvelLogo />
    </Box>
  )
}

