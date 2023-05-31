import { StateSchema, useAppDispatch } from '@/store';
import { playerActions } from '@/store/slices/playerSlice';
import style from '@/styles/player.module.scss';
import { Pause, PlayArrow, VolumeUp } from '@mui/icons-material';
import { Grid, IconButton } from '@mui/material';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import TrackProgress from '../TrackProgress';

let audio: any;

const Player = () => {
  const dispatch = useAppDispatch();
  const { active, currentTime, duration, pause, volume } = useSelector(
    (state: StateSchema) => state.player,
  );

  useEffect(() => {
    !audio ? (audio = new Audio()) : (setAudio(), playHandler());
  }, [active]);

  function setAudio() {
    if (active) {
      audio.src = active.audio;
      audio.volume = volume / 100;
      audio.onloadedmetadata = () =>
        dispatch(playerActions.setDuration(Math.ceil(audio.duration)));
      audio.ontimeupdate = () =>
        dispatch(playerActions.setCurrentTime(Math.ceil(audio.currentTime)));
    }
  }

  function playHandler() {
    if (pause) {
      dispatch(playerActions.playTrack());
      audio.play();
    } else {
      dispatch(playerActions.pauseTrack());
      audio.pause();
    }
  }

  function changeCurrentTime(e: React.ChangeEvent<HTMLInputElement>) {
    audio.setCurrentTime = +e.target.value;
    dispatch(playerActions.setCurrentTime(+e.target.value));
  }

  function changeVolume(e: React.ChangeEvent<HTMLInputElement>) {
    audio.volume = +e.target.value / 100;
    dispatch(playerActions.setVolume(+e.target.value));
  }

  if (!active) {
    return null;
  }

  return (
    <div className={style.player}>
      <IconButton onClick={playHandler}>
        {pause ? <PlayArrow /> : <Pause />}
      </IconButton>
      <Grid
        container
        direction="column"
        style={{ width: 200, margin: '0 20px' }}
      >
        <div>{active?.name}</div>
        <div style={{ fontSize: 12, color: 'gray' }}>{active?.artist_name}</div>
      </Grid>
      <TrackProgress left={0} right={duration} onChange={changeCurrentTime} />
      <VolumeUp style={{ marginLeft: 'auto' }} />
      <TrackProgress left={volume} right={100} onChange={changeVolume} />
    </div>
  );
};

export default Player;
