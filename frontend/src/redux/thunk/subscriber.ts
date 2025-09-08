
import { emailSchema } from '@/schema/email.schema';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import z from 'zod';

type emailFormData = z.infer<typeof emailSchema>;

export const SubsriberThunk = createAsyncThunk(
  'email/subscribe',
  async (data: emailFormData, thunkAPI) => {
    try {
      const response = await axios.post(
        'http://localhost:3001/subscribers',
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

