import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// API URL
const APIURL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=100&page=1&locale=en';

// Action Creators
export const fetchCrypto = createAsyncThunk('crypto/FETCH_CRYPTOCURRENCIES', async (thunkAPI) => {
  try {
    const res = await fetch(APIURL);
    const resData = await res.json();
    return resData;
  } catch (error) {
    return thunkAPI.rejectWithValue({ error: 'Error fetching cryptocurrency data from API' });
  }
});

const initialState = {
  cryptoCurrency: [],
  isLoading: false,
  error: false,
};

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCrypto.fulfilled, (state, action) => {
        const response = action.payload;
        const CryptoData = [];
        response.forEach((crypto) => {
          CryptoData.push({
            id: crypto.id,
            symbol: crypto.symbol,
            name: crypto.name,
            image: crypto.image,
            current_price: crypto.current_price,
            market_cap: crypto.market_cap,
            market_cap_rank: crypto.market_cap_rank,
            fully_diluted_valuation: crypto.fully_diluted_valuation,
            total_volume: crypto.total_volume,
            high_24h: crypto.high_24h,
            low_24h: crypto.low_24h,
            price_change_24h: crypto.price_change_24h,
            market_cap_change_24h: crypto.market_cap_change_24h,
            circulating_supply: crypto.circulating_supply,
            total_supply: crypto.total_supply,
            max_supply: crypto.max_supply,
            last_updated: crypto.last_updated,
          });
        });
        return ({
          ...state,
          isLoading: false,
          cryptoCurrency: CryptoData,
        });
      })
      .addCase(fetchCrypto.pending, (state) => ({
        ...state,
        isLoading: true,
        error: false,
      }))
      .addCase(fetchCrypto.rejected, (state) => ({
        ...state,
        error: true,
        isLoading: false,
      }));
  },
});

export default cryptoSlice.reducer;
