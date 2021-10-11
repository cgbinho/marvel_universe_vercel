import * as React from 'react';
import Image from 'next/image';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { GetStaticPaths, GetStaticProps } from 'next';
import { Footer } from '../../components/Footer';
import { CharactersIcon } from '../../components/Icons/Characters';

interface CharacterData {
  id: string;
}

export default function Characters({ id }: CharacterData) {
  return (
    <Container disableGutters maxWidth={false} sx={{
      display: 'grid',
      gridTemplateColumns: '1fr',
      gridTemplateRows: 'auto 1fr auto',
      minHeight: '100vh',
    }}>
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
      </Box>
      <Box sx={{ overflow: 'auto' }}>
        {/* Characters */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            <CharactersIcon />
            <Typography
              variant="h6"
              fontWeight="700"
              component="h4"
              color="text.primary"
            >
              Characters
            </Typography>
            {' '} / {' '}
            <Typography
              variant="h6"
              fontWeight="700"
              component="h4"
              color="text.primary"
            >
              {id}
            </Typography>

          </Box>
        </Box>
        {/* Character Card */}
        <Box
          sx={{
            backgroundColor: 'grey.900',
            padding: '1rem',
            // textAlign: 'center'
          }}>
          <Typography
            variant="subtitle1"
            fontWeight="700"
            color="grey.600"
          >
            Name
          </Typography>
          <Typography
            variant="h4"
            fontWeight="700"
            component="h4"
            color="grey.200"
            gutterBottom
          >
            {id}
          </Typography>

          <Typography
            variant="body1"
            fontWeight="400"
            color="grey.200"
            gutterBottom
          >
            Description text
          </Typography>

          <Typography
            variant="h6"
            fontWeight="700"
            color="grey.600"
          >
            Last seen on
          </Typography>

          {/* Comics */}
          <Typography
            variant="subtitle1"
            fontWeight="700"
            color="grey.200"
          >
            Comics
          </Typography>
          <ul>
            <li>
              <Typography
                variant="body2"
                fontWeight="400"
                color="grey.200"
              >
                Comic book name - 2021
              </Typography>
            </li>
          </ul>
          {/* Stories */}
          {/* Events */}
          {/* Series */}
          {/* Navigation */}
          <Grid container gap="1rem">
            <Button variant="contained" startIcon={<NavigateBeforeIcon />} >
              Previous
            </Button>
            <Button variant="contained" endIcon={<NavigateNextIcon />} >
              Next
            </Button>
          </Grid>
        </Box>
      </Box >
      <Footer />
    </Container >
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

  const id = params?.id;
  // load character data

  return {
    props: {
      id
    },
  };
}

export const getStaticPaths: GetStaticPaths = async () => {

  // const res = await fetch('https://.../posts')
  // const posts = await res.json()

  const characters = [{ id: 'wolverine' }];

  // Get the paths we want to pre-render based on posts
  const paths = characters.map((character) => ({
    params: { id: character.id },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}