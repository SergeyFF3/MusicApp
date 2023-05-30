import MainLayout from '@/layout/MainLayout';
import { Button, Grid } from '@mui/material';
import { useRouter } from 'next/router';
import style from '@/styles/track.module.scss';
import Image from 'next/image';

const TrackPage = () => {
  const router = useRouter();

  return (
    <MainLayout>
      <Button
        variant="outlined"
        className={style.btn}
        onClick={() => router.push('/tracks')}
      >
        К списку
      </Button>
      <Grid container className={style.grid}>
        <Image src={''} width={200} height={200} alt="" />
        <div className={style.gridItem}>
          {/* <h2>Название трека{track.name}</h2>
            <h2>Исполнитель{track.artist}</h2>
            <h2>Прослушиваний - {track.list}</h2> */}
        </div>
      </Grid>
      <h2>Текст трека</h2>
      {/* <p>{track}</p> */}
    </MainLayout>
  );
};

export default TrackPage;
