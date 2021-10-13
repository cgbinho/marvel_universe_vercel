import { Box, Grid, Typography } from '@mui/material';
import * as React from 'react';
import { useInfiniteQuery } from 'react-query';
import { api } from '../api';
import { CardComponent } from '../components/Card';
import { Hero } from '../components/Hero';
import { CharactersIcon } from '../components/Icons/Characters';
import { Layout } from '../components/Layout';
import { useState } from 'react'
import Head from 'next/head';
import InfiniteScroll from 'react-infinite-scroll-component';

export default function Index() {

  const [offset, setOffset] = useState<number | undefined>(0);

  const fetchCharacters = async ({ offset = 0 }) => {
    const limit = 20;
    const { data } = await api.get(`/characters`, {
      params: { offset }
    });

    // console.log(data.data.total)
    const { total, count, results, offset: offsetData } = data.data;

    return { results, nextPage: offsetData + limit, totalPages: Math.ceil(total / limit), lastPage: count < limit };
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
    getNextPageParam: (lastData, pages) => {
      if (lastData.lastPage) {
        return undefined;
      }
      return lastData.nextPage;
      // return lastData.nextPage;
    }, retry: false
  });

  return (
    <Layout>
      <Head>
        Marvel Universe - by cgbordin@gmail.com
      </Head>
      <Hero />
      {/* <pre>{JSON.stringify(data?.pages[0].data.results, null, 2)}</pre> */}
      <Grid container spacing={4} p={4} sx={{ backgroundColor: 'grey.900' }}>
        <Box>
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

          <InfiniteScroll
            // hasMore={hasNextPage}
            // loadMore={fetchNextPage}
            dataLength={1788} //This is important field to render the next data
            next={fetchNextPage}
            hasMore={hasNextPage}
            loader={<h4>Loading...</h4>}
            endMessage={
              <p style={{ textAlign: 'center' }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
          >
            <Grid container m={1} spacing={2}>
              {data?.pages[0]?.results?.map(character =>
                <CardComponent key={character.id} {...{ character }} />)
              }
            </Grid>
          </InfiniteScroll>
        </Box>
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