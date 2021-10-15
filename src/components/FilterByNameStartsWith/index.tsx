import { Button, ButtonGroup, Grid, Typography } from '@mui/material';
import React from 'react';

interface FilterbyNameStartsWithData {
  setNameStartsWith: React.Dispatch<React.SetStateAction<string>>;
  setOffset: React.Dispatch<React.SetStateAction<number>>;
}

export function FilterByNameStartsWith({ setNameStartsWith, setOffset }: FilterbyNameStartsWithData) {

  const nameStartFilters: string[] = Array.from('ABCDEFGHIJKLMNOPQRSTUVXYZ0123456789');

  return (
    <>
      <Grid mx={5} my={1} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Typography
          variant="body1"
          fontWeight="400"
          color="grey.600"
        >
          Filter by Name
        </Typography>
      </Grid>
      <Grid
        mx={1}
        mb={2}
        maxWidth={1200}
        sx={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <ButtonGroup
          size="small"
          aria-label="text button group"
          sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}
        >
          <Button
            onClick={async () => {
              setOffset(0);
              setNameStartsWith('');
            }}
            variant="text"
          >
            All
          </Button>
          {nameStartFilters.map((nameInitial: string) =>
            <Button key={nameInitial}
              onClick={async () => {
                setOffset(0);
                setNameStartsWith(nameInitial);
              }}
              variant="text">{nameInitial}
            </Button>
          )}
        </ButtonGroup>
      </Grid>
    </>
  )
}
