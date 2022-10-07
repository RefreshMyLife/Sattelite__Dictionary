import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WordItem, SearchSliceState, Status } from '../../types/types';
import { RootState } from '../store';
import { fetchWord } from './asincActions';
const initialState: SearchSliceState = {
  searchValue: '',
  status: '',
  words: [],
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    setWord(state, actions: PayloadAction<WordItem[]>) {
      state.words = actions.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchWord.pending, (state) => {
      state.status = Status.LOADING;
      state.words = [];
    });
    builder.addCase(fetchWord.fulfilled, (state, action) => {
      state.words = action.payload;
      state.status = Status.SUCCESS;
    });

    builder.addCase(fetchWord.rejected, (state) => {
      state.status = Status.ERROR;
      state.words = [];
    });
  },
});

export const { setSearchValue, setWord } = searchSlice.actions;

export const selectSearch = (state: RootState) => state.search;

export default searchSlice.reducer;
