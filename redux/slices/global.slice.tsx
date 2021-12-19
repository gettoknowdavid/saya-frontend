// Define a type for the slice state
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-cycle
import { RootState } from '../store';

interface GlobalState {
    settings: object
    drawerIsOpen: boolean,
}

const initialState = {
  settings: {},
  drawerIsOpen: false,
} as GlobalState;

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    getSettings: ((state, action: PayloadAction<object>) => ({
      ...state, settings: action.payload,
    })),
    toggleDrawer: (state, action: PayloadAction<boolean>) => ({
      ...state, drawerIsOpen: action.payload,
    }),
    closeDrawer: (state) => ({
      ...state, drawerIsOpen: initialState.drawerIsOpen,
    }),
  },
});

export const { getSettings, toggleDrawer, closeDrawer } = globalSlice.actions;

export const selectGlobal = (state: RootState) => state.globalRepo;

export default globalSlice.reducer;
