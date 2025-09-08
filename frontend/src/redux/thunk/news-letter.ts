
import { emailSchema } from '@/schema/email.schema';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import z from 'zod';



export const NewsLetterThunk = createAsyncThunk(
  'email/subscribe',
  async (data: any, thunkAPI) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/news-letters",
        data,
        { withCredentials: true }
      );
      return response.data;
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message || 'Something went wrong';
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

