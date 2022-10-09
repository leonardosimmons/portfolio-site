import React from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './store';
import { updateCurrentWindowSize } from '../features/ui/ui-slice';

/** Dispatches predefined actions to alter application state */
export const useAppDispatch = () => useDispatch<AppDispatch>();

/** Application state selector */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

/** Sets current viewport size */
export function useViewport() {
  const dispatch = useAppDispatch();

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
}
