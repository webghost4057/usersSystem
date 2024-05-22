import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import conf from '../conf/conf';
export const fetchUsers = createAsyncThunk(
  'user/fetchUsers',
  async () => {
    try {
        const response = await axios.get(`${conf.apikey}`);
        return response.data;
    } catch (error) {
        console.log(error);     
    }
  }
);

const initialState = {
  users: [],
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // You can define other reducers here if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload;
      });
  },
});

export default userSlice.reducer;
