import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import { useRouter } from 'next/router';
import { CharacterItemData } from '../../@types';

interface CharacterProps {
  character: CharacterItemData
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
        onClick={() => router.push(`characters/${character.id}`)}>
        <CardMedia
          sx={{ borderRadius: '1rem 0 0 0' }}
          component="img"
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


