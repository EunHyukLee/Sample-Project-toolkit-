import { configureStore } from "@reduxjs/toolkit";
import boardReducer from "../modules/boardSlice";
import uriReducer from "../modules/uriSlice"

export const store = configureStore({
  reducer: {
    board: boardReducer,
    uri: uriReducer
  }
});