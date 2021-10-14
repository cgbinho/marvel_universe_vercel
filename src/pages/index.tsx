import { Box, Grid, Typography, CircularProgress, ButtonGroup, Button } from '@mui/material';
import * as React from 'react';
import { useState } from 'react';
import { useInfiniteQuery, useQueryClient } from 'react-query';
import { api } from '../api';
import { CardComponent } from '../components/Card';
import { Hero } from '../components/Hero';
import { CharactersIcon } from '../components/Icons/Characters';
import { Layout } from '../components/Layout';
import Head from 'next/head';
import InfiniteScroll from 'react-infinite-scroll-component';
import { CircularIndeterminate } from '../components/Loading';
import { useRouter } from 'next/router';

interface QueryKeyData {
  pageParam?: number;
  queryKey: [
    offset?: number,
    nameStartsWith?: string,
    orderBy?: 'name' | '-name',
  ]
}

const fetchCharacters = async (
  { pageParam = 0, queryKey }: QueryKeyData) => {

  const [offset, nameStartsWith, orderBy] = queryKey;

  // console.log([{ nameStartsWith }, { orderBy }]);

  const params = Object.assign(
    { offset: pageParam },
    nameStartsWith && { nameStartsWith },
    orderBy && { orderBy }
  );
  console.log(params);

  const { data } = await api.get(`/characters`, { params });
  /* 
  offset (int, optional): The requested offset (number of skipped results) of the call.,
  limit (int, optional): The requested result limit.,
  total (int, optional): The total number of resources available given the current filter set.,
  count (int, optional): The total number of results returned by this call.,
  results (Array[Character], optional): The list of characters returned by the call.
  */
  const { total, count, results, limit, offset: dataOffset } = data.data;

  const parcial: number = count + dataOffset * limit;
  const nextOffset: number = dataOffset + limit;
  const lastPage: boolean = parcial >= total;

  // console.log({ total, count, results, limit, offset, nextOffset, lastPage })
  return { total, count, results, limit, offset: pageParam, nextOffset, lastPage };
}

export default function Index() {

  const nameInitialFilters: string[] = Array.from('0123456789ABCDEFGHIJKLMNOPQRSTUVXYZ');

  const [offset, setOffset] = useState(0);
  const [nameStartsWith, setNameStartsWith] = useState('A');
  const [orderBy, setOrderBy] = useState('name');

  // const fetchCharacters = async (
  //   { pageParam = 0, queryKey }: QueryKeyData) => {

  //   const [offset, nameStartsWith, orderBy] = queryKey;

  //   // console.log([{ nameStartsWith }, { orderBy }]);

  //   const params = Object.assign(
  //     { offset: pageParam },
  //     nameStartsWith && { nameStartsWith },
  //     orderBy && { orderBy }
  //   );
  //   console.log(params);

  //   const { data } = await api.get(`/characters`, { params });
  //   /* 
  //   offset (int, optional): The requested offset (number of skipped results) of the call.,
  //   limit (int, optional): The requested result limit.,
  //   total (int, optional): The total number of resources available given the current filter set.,
  //   count (int, optional): The total number of results returned by this call.,
  //   results (Array[Character], optional): The list of characters returned by the call.
  //   */
  //   const { total, count, results, limit, offset: dataOffset } = data.data;

  //   const parcial: number = count + dataOffset * limit;
  //   const nextOffset: number = dataOffset + limit;
  //   const lastPage: boolean = parcial >= total;

  //   // console.log({ total, count, results, limit, offset, nextOffset, lastPage })
  //   return { total, count, results, limit, offset: pageParam, nextOffset, lastPage };
  // }

  const {
    data,
    error,
    fetchNextPage,
    refetch,
    hasNextPage,
    isLoading,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery([offset, nameStartsWith, orderBy], fetchCharacters, {
    getNextPageParam: (lastPage, pages) => lastPage.nextOffset
  });

  const router = useRouter();

  return (
    <Layout>
      <Head>
        <title>Marvel Universe - by cgbordin@gmail.com</title>
      </Head>
      <Hero />
      {/* {data && <pre>{JSON.stringify(data, null, 2)}</pre>} */}
      <Grid container spacing={4} p={4} sx={{ display: 'flex', flexDirection: 'column', backgroundColor: 'grey.900' }}>
        {/* Characters */}
        <Grid ml={2} mb={2} sx={{ display: 'flex', alignItems: 'center' }}>
          <CharactersIcon />
          <Typography
            variant="h6"
            fontWeight="700"
            component="h4"
            color="grey.200"
            ml={1}
          >
            Characters
          </Typography>
        </Grid>
        <Grid mx={2} sx={{ display: 'flex' }}>
          <Typography
            variant="body1"
            fontWeight="400"
            color="grey.600"
          >
            Filter by name
          </Typography>
        </Grid>
        <Grid mx={1} sx={{ display: 'flex', flexDirection: 'row' }}>
          <ButtonGroup
            size="small"
            aria-label="text button group"
            sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}
          >
            {nameInitialFilters.map((nameInitial: string) =>
              <Button key={nameInitial}
                onClick={async () => {
                  setOffset(0);
                  setNameStartsWith(nameInitial);
                }}
                variant="text">{nameInitial}</Button>
            )}
          </ButtonGroup>
        </Grid>

        {error && <p>Error loading results</p>}
        {/* <CircularIndeterminate /> */}
        {isLoading && <CircularIndeterminate />}
        {/* {data && <pre>{JSON.stringify(data, null, 2)}</pre>} */}
        {data &&
          <>
            <InfiniteScroll
              dataLength={data.pages.length} //This is important field to render the next data
              next={() => fetchNextPage()}
              hasMore={hasNextPage}
              style={{ overflowX: 'hidden' }}
            >
              <Grid container m={1} spacing={2}>
                {data.pages.map(page => page.results.map(character => <CardComponent key={character.id} {...{ character }} />))}
              </Grid>
            </InfiniteScroll>
            <Button
              variant="contained"
              onClick={() => router.push('/#home')}
            >
              Return to top
            </Button>
          </>
        }
      </Grid >
    </Layout >
  );
}