import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchItemsAPI } from '../services/api';
import { ProductItem } from '../models';

export interface ItemsState {
    items: ProductItem[];
    selectedItem: ProductItem | null;
    loading: boolean;
}

const initialState: ItemsState = {
    items: [],
    selectedItem: null,
    loading: false,
};

export const fetchItems = createAsyncThunk<ProductItem[]>('items/fetch', async () => {
    const response = await fetchItemsAPI();
    return response.data;
});

const itemsSlice = createSlice({
    name: 'items',
    initialState: initialState,
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
