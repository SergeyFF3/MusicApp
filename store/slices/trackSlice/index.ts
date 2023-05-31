import { TrackState } from '@/types/tracks';
import { createSlice } from '@reduxjs/toolkit';

const initialState: TrackState = {
  tracks: [],
  error: '',
};

export const trackSlice = createSlice({
  name: 'trackSlice',
  initialState,
  reducers: {},
});

export const { actions: trackActions } = trackSlice;
export const { reducer: trackReducer } = trackSlice;
