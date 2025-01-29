import {configureStore} from "@reduxjs/toolkit";
import styleReducer from './features/styleSlice.js';

export const store = configureStore({
   reducer: {
      style: styleReducer,
   }
});

