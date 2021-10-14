import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export function CircularIndeterminate() {
  return (
    <Box m={10} sx={{ display: 'block', justifyContent: 'center' }}>
      <CircularProgress />
    </Box>
  );
}