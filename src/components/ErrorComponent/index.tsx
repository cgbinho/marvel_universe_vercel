import * as React from 'react';
import Box from '@mui/material/Box';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import { Typography } from '@mui/material';
import { Icon } from '@mui/material';

interface ErrorMessageData {
  message: string;
}

export function ErrorComponent({ message }: ErrorMessageData) {
  return (
    <Box m={10} sx={{ display: 'flex', flexDirection: "column", justifyContent: 'center', alignItems: 'center' }}>
      <SentimentVeryDissatisfiedIcon color="primary" fontSize="large" />
      <Typography
        variant="h6"
        fontWeight="700"
        color="grey.300"
      >
        {message}
      </Typography>
    </Box>
  );
}