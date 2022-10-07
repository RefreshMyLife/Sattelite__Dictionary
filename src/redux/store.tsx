import { configureStore } from '@reduxjs/toolkit';
import searchSlice from './search/slice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    search: searchSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
