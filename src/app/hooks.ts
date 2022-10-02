import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store";
import { AxiosRequestConfig } from "axios";
import { Http } from "../../lib/http";

/** Dispatches predefined actions to alter application state */
export const useAppDispatch = () => useDispatch<AppDispatch>();

/** Application state selector */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

/**
 * Hook for making http requests
 */
export function useHttp() {
    const http = new Http();

    /** Performs a http 'GET' request */
    async function get<D>(
        api: string,
        config?: AxiosRequestConfig
    ): Promise<D> {
        try {
            return await http.get(api, config);
        } catch (err) {
            throw err;
        }
    }

    /** Performs a http 'POST' request */
    async function post<D>(
        api: string,
        data: D,
        config?: AxiosRequestConfig
    ): Promise<D> {
        try {
            return await http.post(api, data, config);
        } catch (err) {
            throw err;
        }
    }

    /** Performs a http 'PUT' request */
    async function put<D>(
        api: string,
        data: D,
        config?: AxiosRequestConfig
    ): Promise<D> {
        try {
            return await http.put(api, data, config);
        } catch (err) {
            throw err;
        }
    }

    /** Performs a http 'DELETE' request */
    async function remove<D>(
        api: string,
        config?: AxiosRequestConfig
    ): Promise<D> {
        try {
            return await http.remove(api, config);
        } catch (err) {
            throw err;
        }
    }
}
