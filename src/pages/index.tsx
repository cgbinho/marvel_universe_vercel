import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Button, ButtonGroup, Grid } from '@mui/material';
import Head from 'next/head';
import React, { useRef, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useInfiniteQuery } from 'react-query';
import { CharacterItemData } from '../@types';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { CardComponent } from '../components/Card';
import { ErrorComponent } from '../components/ErrorComponent';
import { FilterByNameStartsWith } from '../components/FilterByNameStartsWith';
import { FilterByOrder } from '../components/FilterByOrder';
import { Hero } from '../components/Hero';
import { Layout } from '../components/Layout';
import { LoadingComponent } from '../components/LoadingComponent';
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
  } = useInfiniteQuery(["characters", { offset, nameStartsWith, orderBy }], fetchCharacters, {
    getNextPageParam: (lastPage, pages) => {
      if (lastPage.lastPage) {
        return undefined;
      }
      return lastPage.nextOffset;
    }
  });

  const backToRef = useRef(null);


  return (
    <Layout>
      <Head>
        <title>Marvel Universe - by cgbordin@gmail.com</title>
      </Head>

      <Hero />

      <Grid ref={backToRef} container spacing={4} p={4} sx={{
        display: 'flex',
        flexDirection: 'column',
        alignContent: "center",
        backgroundColor: 'grey.900',
        flexWrap: 'nowrap'
      }}
      >

        <Breadcrumbs {...{ categoryName: 'Characters', color: "grey.200" }} />

        <FilterByNameStartsWith {...{ setNameStartsWith, setOffset }} />

        <FilterByOrder {...{ setOrderBy }} />

        {error && <p>Error loading results</p>}
        {isLoading && <LoadingComponent />}
        {data?.pages?.[0]?.count === 0 && <ErrorComponent {...{ message: 'No results found.' }} />}
        {data &&
          <>
            <InfiniteScroll
              dataLength={data.pages.length} //This is important field to render the next data
              next={() => fetchNextPage()}
              loader={isFetching && <LoadingComponent />}
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
                {data.pages.map(page => page.results.map((character: CharacterItemData) => <CardComponent key={character.id} {...{ character }} />))}
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
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
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