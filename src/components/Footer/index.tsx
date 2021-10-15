import { Box } from '@mui/material';
import MuiLink from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { Contact } from '../Contact';

export function Footer() {
  return (
    <>
      <Contact />
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
        <a href={'https://www.marvel.com'}>
          <Typography
            variant="caption"
            color="grey.400"
          >
            Disclaimer: data provided by Marvel - © {new Date().getFullYear()} Marvel.
          </Typography>
        </a>
      </Box>
    </>
  );
}
