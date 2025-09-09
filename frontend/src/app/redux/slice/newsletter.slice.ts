'use client'
import { createAsyncThunk } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { any } from 'zod';
import qs from 'qs';







export interface NewsLetter {
  id: number;
  title: string;
  description: string;
  status: string;
  emailContent:HTMLElement
}

export interface NewsLetterResponse {
  total: number;
  page: number;
  limit: number;
  newsletter: NewsLetter[];
}

interface NewsLetterState {
  newsletterlist: NewsLetterResponse | null;
  loading: boolean;
  error: string | null;
}

const initialState: NewsLetterState = {
  newsletterlist: null,
  loading: false,
  error: null,
};


export interface GetNewsLetterkQuery {
  page?: number;
  limit?: number;
  search?: string
}

export const getNewsLetterThunk = createAsyncThunk(
  'newsletter/getnewsletter',
  async (query: GetNewsLetterkQuery, { rejectWithValue }) => {
    try {
      const response = await axios.get(`http://localhost:3001/news-letters`, {
        withCredentials: true,
        params: query
      });
      console.log("News Letters",response.data);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch Feedbacks');
    }
  }
);

const newsLetterSlice = createSlice({
  name: 'newsletterlist',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getNewsLetterThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getNewsLetterThunk.fulfilled, (state, action) => {
        state.loading = false;
        console.log("abcdef",action.payload);
        state.newsletterlist = action.payload;
      })
      .addCase(getNewsLetterThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});
;

export default newsLetterSlice.reducer;