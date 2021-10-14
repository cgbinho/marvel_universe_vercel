import * as React from 'react';
import { Container, Grid } from '@mui/material';
import { Footer } from '../Footer';
import { Navbar } from '../Navbar';

interface LayoutData {
  children?: React.ReactNode;
}
export function Layout({ children }: LayoutData) {
  return (
    <Container disableGutters maxWidth={false} sx={{
      display: 'grid',
      gridTemplateColumns: '1fr',
      gridTemplateRows: 'auto 1fr auto',
      minHeight: '100vh',
    }}>
      <Navbar />
      <Grid>
        {children}
      </Grid>
      <Footer />
    </Container >
  )
}

