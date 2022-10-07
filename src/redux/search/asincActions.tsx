import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { WordItem } from '../../types/types';

export const fetchWord = createAsyncThunk<WordItem[], String>(
  'search/fetchWord',
  async (search) => {
    const { data } = await axios.get<WordItem[]>(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${search}`,
    );
    return data;
  },
);
