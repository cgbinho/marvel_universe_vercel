import React from 'react';
import { Typography } from '@mui/material';
import { LastSeenCategory } from '../../LastSeenCategory';
import { ComicList, SeriesList, StoryList } from '../../../@types';

interface CharacterLastSeenData {
  comics: ComicList;
  series: SeriesList;
  stories: StoryList;
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

      <LastSeenCategory {...{ categoryName: "Comics", data: comics }} />
      <LastSeenCategory {...{ categoryName: "Series", data: series }} />
      <LastSeenCategory {...{ categoryName: "Stories", data: stories }} />
    </>
  )
}


