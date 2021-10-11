import * as React from 'react';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Button, CardMedia, Container, Grid } from '@mui/material';
import { GetStaticPaths, GetStaticProps } from 'next';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { CharacterLastSeen } from '../../components/Character/LastSeen';
import { CharacterName } from '../../components/Character/Name';
import { Footer } from '../../components/Footer';
import { Navbar } from '../../components/Navbar';


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
      <Navbar />

      <Grid sx={{ overflow: 'auto' }}>
        <Breadcrumbs {...{ name: 'Wolverine' }} />
        {/* Character */}
        <Grid container spacing={4} p={4} sx={{ backgroundColor: 'grey.900' }}>

          {/* Character Image */}
          <Grid item xs={12} md={6}>
            <CardMedia
              component="img"
              src={`/images/marvel_logo.svg`}
              loading="lazy"
            />
          </Grid>

          {/* Character Info */}
          <Grid item xs={12} md={6}>
            <CharacterName {...{ name: 'Wolverine', description: 'Wolverine description text.' }} />
            <CharacterLastSeen {...{ comics: [], stories: [], series: [] }} />

            {/* Navigation */}
            <Grid container gap="1rem">
              <Button variant="contained" startIcon={<NavigateBeforeIcon />} >
                Previous
              </Button>
              <Button variant="contained" endIcon={<NavigateNextIcon />} >
                Next
              </Button>
            </Grid>
          </Grid>
        </Grid>

      </Grid >
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