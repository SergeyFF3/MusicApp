import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

export interface StateSchema {}

export const store = configureStore<StateSchema>({
  reducer: {},
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
