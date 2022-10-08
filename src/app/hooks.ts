import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './store';
import { AxiosRequestConfig } from 'axios';
import { Http } from '../../lib/http';

/** Dispatches predefined actions to alter application state */
export const useAppDispatch = () => useDispatch<AppDispatch>();

/** Application state selector */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

/**
 * Hook for making http requests
 */
export function useHttp() {
  /** Performs a http 'GET' request */
  async function get<D>(api: string, config?: AxiosRequestConfig): Promise<D> {
    return await Http.get(api, config);
  }

  /** Performs a http 'POST' request */
  async function post<D>(
    api: string,
    data: D,
    config?: AxiosRequestConfig,
  ): Promise<D> {
    return await Http.post(api, data, config);
  }

  /** Performs a http 'PUT' request */
  async function put<D>(
    api: string,
    data: D,
    config?: AxiosRequestConfig,
  ): Promise<D> {
    return await Http.put(api, data, config);
  }

  /** Performs a http 'DELETE' request */
  async function remove<D>(
    api: string,
    config?: AxiosRequestConfig,
  ): Promise<D> {
    return await Http.remove(api, config);
  }
}
