import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-cycle
import { RootState } from '@redux/store';
import { CartProductInterface } from '../../types/cart-product.interface';
import { ProductInterface } from '../../types';

interface CartState {
    isOpen: boolean,
    cartQuantity: number,
    items: CartProductInterface[]
}

type AddToCartActionType = ProductInterface | CartProductInterface;

const initialState = {
  isOpen: false,
  cartQuantity: 0,
  items: [],
} as CartState;

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: ((state, action: PayloadAction<AddToCartActionType>) => {
      const { slug } = action.payload.attributes;
      const isOld = state.items.find((i) => i.attributes.slug === slug);
      let cartItems;
      let newCartQuantity;
      if (isOld) {
        const items = state.items.map((item) => {
          if (item.attributes.slug === slug) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
        cartItems = [...items];
        newCartQuantity = cartItems.map((i) => i.quantity).reduce((a, b) => a + b, 0);
      } else {
        const newItem = { ...action.payload, quantity: 1 };
        cartItems = [...state.items, newItem];
        newCartQuantity = cartItems.map((i) => i.quantity).reduce((a, b) => a + b, 0);
      }

      return { ...state, items: cartItems, cartQuantity: newCartQuantity };
    }),
    removeFromCart: ((state, action) => {
      const cartItems = state.items.filter((item) => item.id !== action.payload.id);
      const totalQuantity = cartItems.map((i) => i.quantity).reduce((a, b) => a + b, 0);
      return { ...state, items: cartItems, cartQuantity: totalQuantity };
    }),
    changeQuantity: ((state, action) => {
      state.items = state.items.map((item) => (item.id === action.payload.id
        ? { ...item, quantity: parseInt(action.payload, 10) } : item));
    }),
    increaseItemQuantity: ((state, action) => {
      const { slug } = action.payload.attributes;
      const cartItems = state.items.map((item) => ((item.attributes.slug === slug) ? {
        ...item, quantity: item.quantity + 1,
      } : item));
      const totalQuantity = cartItems.map((i) => i.quantity).reduce((a, b) => a + b, 0);
      return { ...state, items: cartItems, cartQuantity: totalQuantity };
    }),
    decreaseItemQuantity: ((state, action) => {
      const { slug } = action.payload.attributes;
      const cartItems = state.items.map((item) => {
        if (item.attributes.slug === slug) {
          if (item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          }
          if (item.quantity === 1) {
            return { ...item };
          }
        }
        return item;
      });
      const totalQuantity = cartItems.map((i) => i.quantity).reduce((a, b) => a + b, 0);
      return { ...state, items: cartItems, cartQuantity: totalQuantity };
    }),
  },
});

export const {
  addToCart, removeFromCart, decreaseItemQuantity, increaseItemQuantity,
} = cartSlice.actions;

export const selectCart = (state: RootState) => state.cartRepo;

export default cartSlice.reducer;
