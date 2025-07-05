import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchItemsAPI } from '../services/api';

export const fetchItems = createAsyncThunk('items/fetch', async () => {
    const response = await fetchItemsAPI();
    return response.data.products;
});


const itemsSlice = createSlice({
    name: 'items',
    initialState: { items: [], selectedItem: null, loading: false },
    reducers: {
        setSelectedItem: (state, action) => {
            state.selectedItem = action.payload;
        },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchItems.pending, state => { state.loading = true; })
            .addCase(fetchItems.fulfilled, (state, action) => {
                state.items = action.payload;
                state.loading = false;
            });
    },
});

export const { setSelectedItem } = itemsSlice.actions;
export default itemsSlice.reducer;
