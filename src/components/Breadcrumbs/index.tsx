import React from 'react';
import { Box, Typography } from '@mui/material';
import { CharactersIcon } from '../Icons/Characters';

interface BreadcrumbsData {
  categoryName: string;
  color: string;
  itemName?: string;
}

export function Breadcrumbs({ categoryName, itemName, color }: BreadcrumbsData) {
  return (
    <Box mb={2} ml={4} sx={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }
    }>
      <CharactersIcon />
      <Typography
        variant="h6"
        fontWeight="700"
        component="h4"
        color={color}
      >
        {categoryName}
      </Typography>
      {itemName &&
        <>
          {' '} / {' '}
          < Typography
            variant="h6"
            fontWeight="700"
            component="h4"
            color={color}
          >
            {itemName}
          </Typography >
        </>
      }
    </Box >
  )
}


