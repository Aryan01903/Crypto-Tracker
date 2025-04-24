import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://api.coingecko.com/api/v3/coins/markets';
const PARAMS = 'vs_currency=usd&order=market_cap_desc&per_page=5&page=1&sparkline=true&price_change_percentage=1h,24h,7d';

export const fetchCrypto = createAsyncThunk('crypto/fetchCrypto', async () => {
  const response = await axios.get(`${API_URL}?${PARAMS}`);
  return response.data;
});

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState: {
    assets: [],
    status: 'idle',
  },
  reducers: {
    simulateUpdate: (state) => {
      state.assets.forEach(asset => {
        const change = (Math.random() - 0.5) * 0.02; // ±1%
        asset.current_price = +(asset.current_price * (1 + change)).toFixed(2);
        asset.price_change_percentage_1h_in_currency = +(Math.random() * 4 - 2).toFixed(2);
        asset.price_change_percentage_24h_in_currency = +(Math.random() * 10 - 5).toFixed(2);
        asset.total_volume = +(asset.total_volume * (1 + Math.random() * 0.1)).toFixed(0);
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCrypto.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCrypto.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.assets = action.payload;
      })
      .addCase(fetchCrypto.rejected, (state) => {
        state.status = 'failed';
      });
  }
});

export const { simulateUpdate } = cryptoSlice.actions;
export default cryptoSlice.reducer;
