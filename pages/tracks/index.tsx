import MainLayout from '../../layout/MainLayout';
import { Box, Button, Card, Grid, TextField } from '@mui/material';
import { useRouter } from 'next/router';
import { fetchTracks } from '@/services/fetchTracks';
import { ITrack } from '@/types/tracks';
import TrackItem from '@/components/TrackItem';
import ListItem from '@/components/ListItem';
import React, { useState } from 'react';
import { searchTracks } from '@/services/searchTracks';

export async function getServerSideProps(context: any) {
  const tracks = await fetchTracks();
  return {
    props: {
      tracks,
    },
  };
}

export default function Tracks({ tracks }: { tracks: ITrack[] }) {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [timer, setTimer] = useState(null);

  const searchHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
    // setQuery(e.target.value);
    setQuery(e.target.value);
    // if (timer) {
    //   clearTimeout(timer);
    // }
    // setTimer(
    //   setTimeout(() => {
    await searchTracks(e.target.value);
    //   }, 500),
    // );
  };

  return (
    <MainLayout title="Музыкальная площадка - Список треков">
      <Card style={{ width: '100%' }}>
        <Box p={3}>
          <Grid container justifyContent="space-between">
            <h1>Список треков</h1>
            <Button onClick={() => router.push('/tracks/create')}>
              Загрузить
            </Button>
          </Grid>
        </Box>
        <TextField
          fullWidth
          value={query}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            searchHandler(e)
          }
        />
        <ListItem tracks={tracks} />
        {tracks?.map((track) => (
          <TrackItem key={track.id} track={track} />
        ))}
      </Card>
    </MainLayout>
  );
}
