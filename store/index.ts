import { PlayerState } from '@/types/player';
import { TrackState } from '@/types/tracks';
import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { playerReducer } from './slices/playerSlice';
import { trackReducer } from './slices/trackSlice';

export interface StateSchema {
  player: PlayerState;
  track: TrackState;
}

export const store = configureStore<StateSchema>({
  reducer: {
    player: playerReducer,
    track: trackReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
