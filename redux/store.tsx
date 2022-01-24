import { combineReducers, configureStore, PreloadedState } from '@reduxjs/toolkit';
import {
  FLUSH, PAUSE, PERSIST, persistReducer, PURGE, REGISTER, REHYDRATE,
} from 'redux-persist';
// eslint-disable-next-line import/no-cycle
import { cartSlice } from '@redux/slices/cart.slice';
import storage from 'redux-persist/lib/storage';
// eslint-disable-next-line import/no-cycle
import { checkoutSlice } from '@redux/slices/checkout.slice';
// eslint-disable-next-line import/no-cycle
import { filterSlice } from '@redux/slices/filter.slice';
// eslint-disable-next-line import/no-cycle
import { productImageSlice } from '@redux/slices/product-image.slice';
// eslint-disable-next-line import/no-cycle
import { globalSlice } from './slices/global.slice';

const persistCartConfig = { key: 'cart', version: 1, storage };
const persistCheckoutConfig = { key: 'checkout', version: 1, storage };
const persistFilterConfig = { key: 'filter', version: 1, storage };

export const sayaStore = (preloadedState: PreloadedState<unknown>) => configureStore({
  reducer: combineReducers({
    globalRepo: globalSlice.reducer,
    cartRepo: persistReducer(persistCartConfig, cartSlice.reducer),
    checkoutRepo: persistReducer(persistCheckoutConfig, checkoutSlice.reducer),
    filterRepo: persistReducer(persistFilterConfig, filterSlice.reducer),
    productImageRepo: productImageSlice.reducer,
  }),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  preloadedState,
});

// @ts-ignore
export type RootState = ReturnType<typeof sayaStore.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// @ts-ignore
export type AppDispatch = typeof sayaStore.dispatch
