import { PlayerState } from '@/types/player';
import { ITrack } from '@/types/tracks';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: PlayerState = {
  active: null,
  currentTime: 0,
  duration: 0,
  pause: true,
  volume: 50,
};

export const playerSlice = createSlice({
  name: 'playerSlice',
  initialState,
  reducers: {
    setCurrentTime(state, action: PayloadAction<number>) {
      state.currentTime = action.payload;
    },
    setDuration(state, action: PayloadAction<number>) {
      state.duration = action.payload;
    },
    playTrack(state) {
      state.pause = false;
    },
    pauseTrack(state) {
      state.pause = true;
    },
    setVolume(state, action: PayloadAction<number>) {
      state.volume = action.payload;
    },
    setActiveTrack(state, action: PayloadAction<ITrack>) {
      state.active = action.payload;
    },
  },
});

export const { actions: playerActions } = playerSlice;
export const { reducer: playerReducer } = playerSlice;
