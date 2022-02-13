import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    lastId: 0,
    inputData: [
        {
            id:'',
            title:'',
            content:''
        }
    ],
    selectRowData: {}
}

export const boardSlice = createSlice({
    name: 'board',
    initialState,
    reducers: {
        save: (state, action) => {
            return{
            lastId: state.lastId + 1,
            inputData: state.inputData.concat({
                ...action.payload,
                id:state.lastId + 1
            })
        }
        },
        select: (state, action) => {
            return{
            ...state,
            selectRowData: state.inputData.find(row => row.id === action.payload)
        }
        },
        edit: (state, action) => {
            return{
            ...state,
            inputData: state.inputData.map(row =>
                row.id === action.payload.id ?
                {...action.payload} : row
            ),
            selectRowData: {}
        }},
        remove: (state, action) => {
            return{
            lastId: state.lastId === action.payload ? state.lastId - 1 : state.lastId,
            inputData: state.inputData.filter(row =>
                row.id != action.payload.id),
            selectRowData: {}
        }}
    },
    extraReducers: {}
})

export const { save, select, edit, remove } = boardSlice.actions;

export default boardSlice.reducer;
