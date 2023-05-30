import { ITrack } from '@/types/tracks';
import { Delete, Pause, PlayArrow } from '@mui/icons-material';
import { Card, IconButton, Grid } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { FC } from 'react';
import style from './TrackItem.module.scss';

interface TrackItemProps {
  track: ITrack;
  active?: boolean;
}

const TrackItem: FC<TrackItemProps> = ({ track, active = false }) => {
  const router = useRouter();

  return (
    <Card onClick={() => router.push('/tracks/' + track.id)}>
      <IconButton onClick={(e) => e.stopPropagation()}>
        {active ? <Pause /> : <PlayArrow />}
      </IconButton>
      <Image src={track.image || ''} width={70} height={70} alt="" />
      <Grid container direction="column" className={style.grid}>
        <div>{track?.name}</div>
        <div className={style.artist}>{track?.artist_name}</div>
      </Grid>
      <IconButton onClick={(e) => e.stopPropagation()} className={style.delete}>
        <Delete />
      </IconButton>
    </Card>
  );
};

export default TrackItem;
