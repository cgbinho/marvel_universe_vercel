import * as React from 'react';
import { Button, Grid } from '@mui/material';
import { useRouter } from 'next/router';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

export function GoBack() {

  const router = useRouter();

  return (
    <Grid item xs={12} sm={6}>
      <Button
        sx={{ width: "100%" }}
        variant="contained"
        startIcon={<NavigateBeforeIcon />}
        onClick={() => router.push('/')}
      >
        Go back
      </Button>
    </Grid >
  );
}


