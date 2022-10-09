import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { Dimensions, Viewport } from '../../app/types';
import { RootState } from '../../app/store';

interface UiState {
  viewport: Viewport;
  window: Dimensions;
}

const initialState: UiState = {
  viewport: null,
  window: {
    width: 0,
    height: 0,
  },
};

const hydrate = createAction<RootState>(HYDRATE);

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    updateCurrentWindowSize(state, action: PayloadAction<Dimensions>) {
      state.window = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(hydrate, (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    });
  },
});

export const { updateCurrentWindowSize } = uiSlice.actions;
export default uiSlice.reducer;
