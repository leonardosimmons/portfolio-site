
import React from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppActions, AppThunk } from '../../store/action-types';
import { AppState } from '../../store/reducers';


export const useAppDispatch = (): React.Dispatch<AppActions | AppThunk> => {
  return useDispatch();
};

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
