import { ITrack } from '@/types/tracks';
import { Grid, Box } from '@mui/material';
import { FC } from 'react';
import TrackItem from '../TrackItem';

interface ListItemProps {
  tracks: ITrack[];
}

const ListItem: FC<ListItemProps> = ({ tracks }) => {
  return (
    <Grid container direction="column">
      <Box p={2}>
        {tracks.map((track) => (
          <TrackItem key={track.id} track={track} />
        ))}
      </Box>
    </Grid>
  );
};

export default ListItem;
