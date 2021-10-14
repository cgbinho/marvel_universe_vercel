import React, { useState } from 'react';
import Head from 'next/head';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Button, ButtonGroup, Grid } from '@mui/material';
import { useRouter } from 'next/router';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useInfiniteQuery } from 'react-query';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { CardComponent } from '../components/Card';
import { FilterByNameStartsWith } from '../components/FilterByNameStartsWith';
import { FilterByOrder } from '../components/FilterByOrder';
import { Hero } from '../components/Hero';
import { Layout } from '../components/Layout';
import { CircularIndeterminate } from '../components/Loading';
import { fetchCharacters } from '../queries/characters';

export default function Index() {

  const [offset, setOffset] = useState(0);
  const [nameStartsWith, setNameStartsWith] = useState('A');
  const [orderBy, setOrderBy] = useState('name');

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isFetching
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
      <Grid container spacing={4} p={4} sx={{
        display: 'flex',
        flexDirection: 'column',
        alignContent: "center",
        backgroundColor: 'grey.900'
      }}
      >

        <Breadcrumbs {...{ categoryName: 'Characters', color: "grey.200" }} />

        <FilterByNameStartsWith {...{ setNameStartsWith, setOffset }} />

        <FilterByOrder {...{ setOrderBy }} />

        {error && <p>Error loading results</p>}
        {isLoading && <CircularIndeterminate />}
        {/* {data && <pre>{JSON.stringify(data, null, 2)}</pre>} */}
        {data &&
          <>
            <InfiniteScroll
              dataLength={data.pages.length} //This is important field to render the next data
              next={() => fetchNextPage()}
              loader={isFetching && <CircularIndeterminate />}
              hasMore={hasNextPage ? true : false}
              style={{
                overflow: 'initial',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Grid
                container
                ml={{ xs: 1 }}
                mt={{ xs: 2 }}
                rowSpacing={{ xs: 3 }}
                columnSpacing={{ xs: 3 }}
                maxWidth={1200}
              >
                {data.pages.map(page => page.results.map(character => <CardComponent key={character.id} {...{ character }} />))}
              </Grid>
            </InfiniteScroll>
            <ButtonGroup
              size="small"
              aria-label="return to top group"
              sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', margin: '2rem 0' }}
            >
              <Button
                variant="contained"
                startIcon={<KeyboardArrowUpIcon />}
                onClick={() => router.push('/#home')}
              >
                Return to top
              </Button>
            </ButtonGroup>
          </>
        }
      </Grid >
    </Layout >
  );
}