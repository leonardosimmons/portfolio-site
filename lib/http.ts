import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

/** Used for making HTTP requests */
class Http {
  /** Performs a http 'GET' request */
  static async get<D>(api: string, config?: AxiosRequestConfig): Promise<D> {
    return await axios
      .get(api, config)
      .then((res: AxiosResponse<D>) => res.data)
      .catch((err) => {
        throw err;
      });
  }

  /** Performs a http 'POST' request */
  static async post<D>(
    api: string,
    data: D,
    config?: AxiosRequestConfig,
  ): Promise<D> {
    return await axios
      .post(api, data, config)
      .then((res: AxiosResponse<D>) => res.data)
      .catch((err) => {
        throw err;
      });
  }

  /** Performs a http 'PUT' request */
  static async put<D>(
    api: string,
    data: D,
    config?: AxiosRequestConfig,
  ): Promise<D> {
    return await axios
      .put(api, data, config)
      .then((res: AxiosResponse<D>) => res.data)
      .catch((err) => {
        throw err;
      });
  }

  /** Performs a http 'DELETE' request */
  static async remove<D>(api: string, config?: AxiosRequestConfig): Promise<D> {
    return await axios
      .delete(api, config)
      .then((res: AxiosResponse<D>) => res.data)
      .catch((err) => {
        throw err;
      });
  }
}

export { Http };
