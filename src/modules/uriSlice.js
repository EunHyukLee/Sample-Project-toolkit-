import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    inputData: '/'
}

export const uriSlice = createSlice({
    name: 'uri',
    initialState,
    reducers: {
        uriSave: (state, action) => {
            Object.assign({}, state, {inputData: action.payload});
        }
    },
    extraReducers: {}
})

export const { uriSave } = uriSlice.actions;

export default uriSlice.reducer;