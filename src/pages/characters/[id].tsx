import { CardMedia, Grid } from '@mui/material';
import CryptoJS from 'crypto-js';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import * as React from 'react';
import { CharacterItemData } from '../../@types';
import { api } from '../../api';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { CharacterLastSeen } from '../../components/Character/LastSeen';
import { CharacterName } from '../../components/Character/Name';
import { GoBack } from '../../components/GoBack';
import { Layout } from '../../components/Layout';


interface CharacterProps {
  characterData: {
    count: number;
    limit: number;
    offset: number;
    results: CharacterItemData[];
    total: number;
  }
}

export default function Characters({ characterData }: CharacterProps) {

  const { isFallback } = useRouter();

  if (isFallback) {
    return <p>Loading</p>

  }

  const { id, name, description, series, stories, comics, thumbnail } = characterData?.results?.[0];


  return (
    <Layout>
      <Head>
        <title>Marvel Universe - by cgbordin@gmail.com</title>
      </Head>

      <Grid container sx={{
        display: 'flex',
        flexDirection: 'column',
        alignContent: "center",
        justifyContent: "center",
        backgroundColor: 'grey.900'
      }}
      >

        <Grid maxWidth={1200} my={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

          <Breadcrumbs {...{ categoryName: "Characters", itemName: name, color: "white" }} />

          {/* Character */}
          <Grid container sx={{ display: 'flex', flexDirection: 'row', justifyContent: "center" }}>

            {/* Character Image */}
            <Grid item xs={12} sm={6} p={2}>
              <CardMedia
                component="img"
                src={`${thumbnail.path}/portrait_xlarge.${thumbnail.extension}`}
                loading="lazy"
              />
            </Grid>
            {/* Character Info */}
            <Grid item xs={12} sm={6} p={2}>
              <CharacterName {...{ name, description }} />

              <CharacterLastSeen {...{ comics, stories, series }} />

              <GoBack />

            </Grid>

          </Grid>

        </Grid >

      </Grid >

    </Layout >
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

  const { id } = params;

  // load character data
  try {
    // inject params
    api.interceptors.request.use(config => {
      const ts = new Date().getTime();
      const apikey = process.env.NEXT_PUBLIC_MARVEL_KEY;
      const hash = CryptoJS.MD5(`${ts}${process.env.MARVEL_PRIVATE_KEY}${apikey}`).toString();

      config.params = {
        ts,
        apikey,
        hash,
        ...config.params,
      };
      return config;
    });

    const response = await api.get(`/characters/${id}`);
    const characterData = response.data.data;

    return {
      props: {
        characterData
      }
    }

  } catch (err) {
    console.log(err);
    return { notFound: true }
  }
}

// Paths are generated as character requests are made. This way we avoid having to generate all pages at build time.
export const getStaticPaths: GetStaticPaths = () => {
  return { paths: [], fallback: true };
}
