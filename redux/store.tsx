import { combineReducers, configureStore, PreloadedState } from '@reduxjs/toolkit';
import {
  FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE,
} from 'redux-persist';
// eslint-disable-next-line import/no-cycle
import { globalSlice } from './slices/global.slice';

export const sayaStore = (preloadedState: PreloadedState<unknown>) => configureStore({
  reducer: combineReducers({
    globalRepo: globalSlice.reducer,
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
