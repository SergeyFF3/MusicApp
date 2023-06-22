import MainLayout from '@/layout/MainLayout';
import { Button, Grid } from '@mui/material';
import { useRouter } from 'next/router';
import style from '@/styles/track.module.scss';
import Image from 'next/image';
import { useState } from 'react';
import { ITrack } from '@/types/tracks';
import { GetServerSideProps } from 'next';
import process from 'process';
import { CLIENT_ID } from '@/configs/apiConfig';

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/tracks?id=` +
      params?.id +
      `&${CLIENT_ID}`,
  );
  const data = await res.json();

  return {
    props: {
      serverTrack: data.results[0],
    },
  };
};

const TrackPage = ({ serverTrack }: { serverTrack: ITrack }) => {
  const router = useRouter();
  const [track, setTrack] = useState(serverTrack);

  return (
    <MainLayout
      title={`Музыкальная площадка ${track.artist_name} ${track.name}`}
      keywords={`Музыка, артисты, ${track.artist_name}, ${track.name}`}
    >
      <Button
        variant="outlined"
        className={style.btn}
        onClick={() => router.push('/tracks')}
      >
        К списку
      </Button>
      <Grid container className={style.grid}>
        <Image src={track.image || ''} width={200} height={200} alt="" />
        <div className={style.gridItem}>
          <h2>Название трека - {track.name}</h2>
          <h2>Исполнитель - {track.artist_name}</h2>
        </div>
      </Grid>
      <h2>Текст трека</h2>
    </MainLayout>
  );
};

export default TrackPage;
