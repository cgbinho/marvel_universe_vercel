import { Box } from '@mui/material';
import * as React from 'react';
import Image from 'next/image';

export function MarvelLogo() {
  return (
    <Box sx={{ maxWidth: '200px', margin: '0 auto', marginBottom: '1rem' }}>
      <Image
        alt="Marvel Logo"
        src={`/images/marvel_logo.svg`}
        layout="fixed"
        width={"200px"}
        height={"80px"}
      />
    </Box>
  )
}

