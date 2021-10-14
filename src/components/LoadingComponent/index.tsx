import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export function LoadingComponent() {
  return (
    <Box m={10} sx={{ display: 'flex', flexDirection: "column", justifyContent: 'center', alignItems: 'center' }}>
      <CircularProgress />
    </Box>
  );
}