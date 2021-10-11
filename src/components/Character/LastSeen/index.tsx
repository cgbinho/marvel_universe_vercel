import React from 'react';
import { Typography } from '@mui/material';

interface CharacterLastSeenData {
  comics: any;
  series: any;
  stories: any;
}

export function CharacterLastSeen({ comics, series, stories }: CharacterLastSeenData) {
  return (
    <>
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
    </>
  )
}


