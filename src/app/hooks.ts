import React from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, AppState } from './store';
import {
  updateCurrentWindowSize,
  updateViewport,
} from '../features/ui/ui-slice';

/** Dispatches predefined actions to alter application state */
export const useAppDispatch = () => useDispatch<AppDispatch>();

/** Application state selector */
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

/** Sets current viewport size and type */
export function useViewport() {
  const dispatch = useAppDispatch();
  const windowSize = useAppSelector((state) => state.ui.window);

  function handleWindowResize() {
    dispatch(
      updateCurrentWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      }),
    );
  }

  React.useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    handleWindowResize();
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  React.useEffect(() => {
    dispatch(updateViewport());
  }, [windowSize.width]);
}
