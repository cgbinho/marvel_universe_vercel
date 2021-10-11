import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';

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
  // console.log(JSON.stringify(character, null, 2));
  console.log(character);

  return (
    <Card sx={{
      width: 220,
      height: 340,
      display: 'inline-block',
      margin: 1,
      whiteSpace: 'pre-wrap',

    }}>
      <CardActionArea onClick={() => console.log('clicked!')}>
        <CardMedia
          component="img"
          src={`${character.thumbnail.path}/portrait_xlarge.${character.thumbnail.extension}`}
          loading="lazy"
        />
        <CardContent>
          <Typography gutterBottom variant="body2" component="p">
            {character.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}


