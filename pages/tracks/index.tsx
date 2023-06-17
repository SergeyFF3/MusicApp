import MainLayout from '../../layout/MainLayout';
import { Box, Button, Card, Grid } from '@mui/material';
import { useRouter } from 'next/router';
import { fetchTracks } from '@/services/fetchTracks';
import { ITrack } from '@/types/tracks';
import TrackItem from '@/components/TrackItem';

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
        {tracks?.map((track) => (
          <TrackItem key={track.id} track={track} />
        ))}
      </Card>
    </MainLayout>
  );
}
