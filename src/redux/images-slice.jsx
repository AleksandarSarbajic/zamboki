import { createSlice } from "@reduxjs/toolkit";

const imagesSlice = createSlice({
  name: "images",
  initialState: {
    curIndex: 0,
    curItem: {
      img: "",
      description: "",
      id: "",
    },
  },

  reducers: {
    setIndex: (state, action) => {
      state.curIndex = action.payload;
    },
    setItem: (state, action) => {
      state.curItem = {
        img: action.payload.img,
        description: action.payload.description,
        id: action.payload.id,
      };
      state.curIndex = action.payload.i;
    },
    indexPlusOne: (state, action) => {
      state.curItem = {
        img: action.payload.img,
        description: action.payload.description,
        id: action.payload.id,
      };
      state.curIndex = state.curIndex + 1;
    },
    indexMinusOne: (state, action) => {
      state.curItem = {
        img: action.payload.img,
        description: action.payload.description,
        id: action.payload.id,
      };
      state.curIndex = state.curIndex - 1;
    },
  },
});

export const imagesActions = imagesSlice.actions;

export default imagesSlice;
