import { AnyAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { Dimensions, Viewport } from '../../app/types';

import cssVariables from '../../styles/modules/variables.module.scss';

interface UiState {
  viewport: Viewport;
  window: Dimensions;
}

const initialState: UiState = {
  viewport: Viewport.Undefined,
  window: {
    width: 0,
    height: 0,
  },
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    updateCurrentWindowSize(state, action: PayloadAction<Dimensions>) {
      state.window = action.payload;
    },
    updateViewport(state, _: PayloadAction) {
      const width = state.window.width as number;
      const desktop = parseInt(cssVariables.breakpointDesktopSm);
      const mobile = parseInt(cssVariables.breakpointMobileLg);

      if (width >= desktop) {
        state.viewport = Viewport.Desktop;
      } else if (width <= mobile) {
        state.viewport = Viewport.Mobile;
      } else {
        state.viewport = Viewport.Tablet;
      }
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action: AnyAction) => {
      const nextState = {
        ...state,
        ...action.payload.ui,
      };
      if (state.viewport) nextState.viewport = state.viewport;
      if (state.window) nextState.window = state.window;
      return nextState;
    },
  },
});

export const { updateCurrentWindowSize, updateViewport } = uiSlice.actions;
export default uiSlice.reducer;
