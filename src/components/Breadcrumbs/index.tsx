import React from 'react';
import { Box, Typography } from '@mui/material';
import { CharactersIcon } from '../Icons/Characters';

interface BreadcrumbsData {
  name: string;
}

export function Breadcrumbs({ name }: BreadcrumbsData) {
  return (
    <Box mb={6} ml={4} sx={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }
    }>
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
      < Typography
        variant="h6"
        fontWeight="700"
        component="h4"
        color="text.primary"
      >
        {name}
      </Typography >
    </Box >
  )
}


