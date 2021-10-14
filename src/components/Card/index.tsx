import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import { useRouter } from 'next/router';

type CharacterThumbnailData = {
  path: string;
  extension: string;
}

type LastSeenData = {
  available: number;
  collectionURI: string;
  items: {
    resourceURI: string;
    name: string;
    type?: string;
  }[];
  returned: number;
}

interface CharacterData {
  id: number;
  name: string;
  description: string;
  modified: string;
  thumbnail: CharacterThumbnailData;
  resourceURI: string;
  comics: LastSeenData;
  series: LastSeenData;
  stories: LastSeenData;
  events: LastSeenData;
  urls: {
    type: string;
    url: string;
  }[];
}

interface CharacterProps {
  character: CharacterData
}

export function CardComponent({ character }: CharacterProps) {

  const router = useRouter();



  return (
    <Grid item xs={6} sm={4} md={4} lg={2} sx={{
      display: 'flex',
      width: 220,
      color: 'grey.800',
    }}>
      <CardActionArea
        sx={{
          display: 'flex', justifyContent: 'space-between', flexDirection: 'column',
          backgroundColor: 'grey.100',
          borderRadius: '1rem 0 1rem 0'
        }}
        onClick={() => {
          console.log('clicked!')
          router.push(`characters/${character.id}`)
        }}>
        <CardMedia
          sx={{ borderRadius: '1rem 0 0 0' }}
          component="img"
          // height="320"
          src={`${character.thumbnail.path}/portrait_xlarge.${character.thumbnail.extension}`}
          loading="lazy"
        />
        <CardContent sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }} >
          <Typography variant="caption" component="p">
            {character.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Grid>
  )
}


