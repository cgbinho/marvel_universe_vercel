import React from 'react';
import { Typography } from '@mui/material';

interface CharacterNameData {
  name: string;
  description: string
}

export function CharacterName({ name, description }: CharacterNameData) {
  return (
    <>
      <Typography
        variant="h6"
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
        {name}
      </Typography>

      {description !== '' &&
        <Typography
          variant="body1"
          fontWeight="400"
          color="grey.200"
          gutterBottom
          marginBottom="2rem"
        >
          {description}
        </Typography>
      }
    </>
  )
}


