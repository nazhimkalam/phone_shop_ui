import { createSlice } from '@reduxjs/toolkit';

export const viewInventorySlice = createSlice({
	name: 'viewInventoryData',
	initialState: {
		viewInventoryData: [],
	},
	reducers: {
		inventoryData: (state, action) => {
			state.viewInventoryData = action.payload;
		},
        addInventoryData: (state, action) => {
            state.viewInventoryData.push(action.payload);
		},
	},
});

export const { inventoryData, addInventoryData } = viewInventorySlice.actions;

export const selectViewInventData = (state) => state.viewInventoryData.viewInventoryData;

export default viewInventorySlice.reducer; 
