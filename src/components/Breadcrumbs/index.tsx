import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import { CharactersIcon } from '../Icons/Characters';

interface BreadcrumbsData {
  categoryName: string;
  color: string;
  itemName?: string;
}

export function Breadcrumbs({ categoryName, itemName, color }: BreadcrumbsData) {
  return (
    <>
      <Grid container
        mb={2}
        sx={{ display: 'flex', alignItems: 'flex-start' }}
        xs={12}
        px={2}
      >
        <CharactersIcon />
        <Typography
          variant="h6"
          fontWeight="700"
          component="h4"
          color={color}
          ml={1}
        >
          {categoryName}
        </Typography>
        <Grid item xs={12}>
          {
            itemName &&
            < Typography
              variant="h6"
              fontWeight="700"
              component="h4"
              color={color}
              ml={1}
            >
              {' '} / {itemName}
            </Typography >
          }
        </Grid>
      </Grid >
    </>
  )
}


