import * as React from 'react';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';

export function Contact() {
  return (
    <Box my={8}>
      <Typography
        variant="h6"
        fontWeight="700"
        align="center"
      >
        CONTACT ME @
      </Typography>
      <Typography
        variant="body1"
        fontWeight="400"
        align="center"
        gutterBottom
      >
        cgbordin@gmail.com
      </Typography>
    </Box>
  );
}
