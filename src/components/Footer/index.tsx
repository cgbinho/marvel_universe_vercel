import * as React from 'react';
import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';
import { Container, Box } from '@mui/material';

export function Footer() {
  return (
    <Container disableGutters maxWidth={false} >
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
        gutterBottom>
        cgbordin@gmail.com
      </Typography>
      <Box
        sx={{
          backgroundColor: 'grey.900',
          padding: '1rem',
          textAlign: 'center'
        }}>
        <Typography
          variant="body2"
          color="common.white"
          gutterBottom>
          Marvel Universe | created by cgbordin @gmail.com -{' '}
          <MuiLink color="inherit" href="https://cgbordin.com/">
            cgbordin.com
          </MuiLink> - {' '}
          {new Date().getFullYear()}.
        </Typography>
        <Typography
          variant="caption"
          color="grey.400"
        >
          Disclaimer: data provided by Marvel - © {new Date().getFullYear()} Marvel.
        </Typography>
      </Box>
    </ Container >
  );
}
