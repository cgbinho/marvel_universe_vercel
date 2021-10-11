import React from 'react';
import { Card, CardActionArea, ImageList, ImageListItem, ImageListItemBar, CardContent, CardMedia, Typography } from '@mui/material';

export function CardComponent() {
  return (
    <Card sx={{
      width: 200,
      height: 236,
      display: 'inline-block',
      margin: '1rem',
      whiteSpace: 'pre-wrap',

    }}>
      <CardActionArea onClick={() => console.log('clicked!')}>
        <CardMedia
          component="img"
          src={`/images/marvel_logo.svg`}
          loading="lazy"
        />
        <CardContent>
          <Typography gutterBottom variant="body2" component="p">
            {'Character name if we need a longer string'.slice(0, 70) + ' ...'}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}


