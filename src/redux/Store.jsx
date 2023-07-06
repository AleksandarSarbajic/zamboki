import { configureStore } from "@reduxjs/toolkit";
import imagesSlice from "./images-slice";
const store = configureStore({
  reducer: {
    images: imagesSlice.reducer,
  },
});
export default store;
