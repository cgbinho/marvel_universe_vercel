import React from 'react';
import { Button, ButtonGroup, Grid, Typography } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

interface FilterbyNameOrder {
  setOrderBy: React.Dispatch<React.SetStateAction<string>>;
}

export function FilterByOrder({ setOrderBy }: FilterbyNameOrder) {

  return (
    <>
      <Grid mx={5} my={1} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Typography
          variant="body1"
          fontWeight="400"
          color="grey.600"
        >
          Filter by order
        </Typography>
      </Grid>
      <Grid
        mx={4}
        maxWidth={1200}
        sx={{
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <ButtonGroup
          size="small"
          aria-label="text button group"
          sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}
        >
          <Button
            startIcon={<KeyboardArrowUpIcon />}
            onClick={async () => {
              setOrderBy('-name');
            }}
            variant="text"
          >
            Ascending
          </Button>
          <Button
            startIcon={<KeyboardArrowDownIcon />}
            onClick={async () => {
              setOrderBy('name');
            }}
            variant="text"
          >
            Descending
          </Button>
        </ButtonGroup>
      </Grid>
    </>
  )
}
