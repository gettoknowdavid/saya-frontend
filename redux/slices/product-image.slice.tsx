import { createSlice } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-cycle
import { RootState } from '@redux/store';

interface ProductImageState {
    currentImage: string,
    currentIndex: number
}

const initialState = {
  currentImage: null,
  currentIndex: 0,
} as ProductImageState;

export const productImageSlice = createSlice({
  name: 'product-image',
  initialState,
  reducers: {
    changeImage: ((state, action) => {
      state.currentImage = action.payload;
    }),
  },
});

export const { changeImage } = productImageSlice.actions;

export const selectProductImage = (state: RootState) => state.productImageRepo;

export default productImageSlice.reducer;
