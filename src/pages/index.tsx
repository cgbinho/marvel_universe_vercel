import { Box, Container, ImageList, Typography } from '@mui/material';
import * as React from 'react';
import { CardComponent } from '../components/Card';
import { Footer } from '../components/Footer';
import { Hero } from '../components/Hero';
import { CharactersIcon } from '../components/Icons/Characters';

export default function Index() {

  return (
    <Container disableGutters maxWidth={false} sx={{
      display: 'grid',
      gridTemplateColumns: '1fr',
      gridTemplateRows: 'auto 1fr auto',
      minHeight: '100vh',
    }}>
      <Hero />
      <Box sx={{ overflow: 'auto' }}>
        {/* Characters */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <CharactersIcon />
            <Typography
              variant="h6"
              fontWeight="700"
              component="h4"
              color="text.primary"
            >
              Characters
            </Typography>
          </Box>
        </Box>
        {/* Character Card */}
        <Box sx={{
          overflowX: 'scroll',
          overflowY: 'hidden',
          whiteSpace: 'nowrap',
          '&::-webkit-scrollbar': {
            display: 'none'
          },
        }}>
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
        </Box>
      </Box>

      <Footer />
    </Container >
  );
}
