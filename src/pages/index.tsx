import { Box, Grid, Typography } from '@mui/material';
import * as React from 'react';
import { useInfiniteQuery } from 'react-query';
import { api } from '../api';
import { CardComponent } from '../components/Card';
import { Hero } from '../components/Hero';
import { CharactersIcon } from '../components/Icons/Characters';
import { Layout } from '../components/Layout';
import { useState } from 'react'

export default function Index() {

  const [offset, setOffset] = useState<number>(0);

  const fetchCharacters = async ({ offset = 0 }) => {
    const limit = 20;
    const { data } = await api.get(`/characters`, {
      params: { offset }
    });

    return data;
  }

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery('characters', () => fetchCharacters({ offset }), {
    getNextPageParam: (lastPage, pages) => lastPage.nextCursor,
    retry: false
  })

  const styles = {
    overflowX: 'auto',
    '&::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px black',
      boxShadow: 'inset 0 0 6px black',
      backgroundColor: 'hsl(0, 0%, 16%)',
    },
    '&::-webkit-scrollbar': {
      width: '10px',
      height: '10px',
      backgroundColor: 'hsl(0, 0%, 100%)'
    },
    '&::-webkit-scrollbar-thumb': {
      'borderRadius': '4px',
      '-webkit-box-shadow': 'inset 0 0 6px black',
      'boxShadow': 'inset 0 0 1px black',
      backgroundColor: 'hsl(0, 0%, 33%)'
    },
    '&::-webkit-scrollbar-thumb:hover': {
      background: 'hsl(0, 0%, 50%)'
    }
  }

  return (
    <Layout>
      <Hero />
      {/* <pre>{JSON.stringify(data?.pages[0].data.results, null, 2)}</pre> */}
      <Grid container spacing={4} p={4} sx={{ backgroundColor: 'grey.900' }}>
        <Box sx={{ overflow: 'auto' }}>
          {/* Characters */}
          <Grid ml={2} sx={{ display: 'flex', alignItems: 'center' }}>
            <CharactersIcon />
            <Typography
              variant="h6"
              fontWeight="700"
              component="h4"
              color="grey.200"
            >
              Characters
            </Typography>
          </Grid>
          {/* Characters list */}
          <Box sx={styles}>
            <Box sx={{ width: '100vw', whiteSpace: 'nowrap' }}>
              {data?.pages[0]?.data?.results?.map(character =>
                <CardComponent key={character.id} {...{ character }} />)
              }
            </Box>
          </Box>
        </Box >
      </Grid >
    </Layout >
  );
}

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   // export async function getServerSideProps(context) {
//   api.interceptors.request.use(config => {
//     const ts = new Date().getTime();
//     const apikey = process.env.NEXT_PUBLIC_MARVEL_KEY;
//     console.log(ts);
//     console.log(apikey);
//     const message = ts + `${process.env.MARVEL_PRIVATE_KEY}` + apikey;
//     console.log(message);
//     const hash = CryptoJS.MD5(message);
//     console.log(hash);

//     config.params = {
//       ts,
//       apikey,
//       hash,
//       ...config.params,
//     };
//     return config;
//   });

//   return {
//     props: {}, // will be passed to the page component as props
//   }
// }