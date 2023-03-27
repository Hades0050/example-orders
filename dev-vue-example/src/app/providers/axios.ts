import { useUiStore } from './../../shared/store/index';
import { useUsersStore } from './../../entities/users/store/index';
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $axios: AxiosInstance;
  }
}

class AxiosService {
  private axiosInstance: AxiosInstance;
  constructor() {
    this.axiosInstance = axios.create({ baseURL: 'http://127.0.0.1:6060' });
    const token = localStorage.getItem('token');
    if (token) {
      this.axiosInstance.defaults.headers.common['token'] = token;
    }
    //Отслеживание валидности запросов
    this.axiosInstance.interceptors.response.use(
      (response) => {
        useUiStore().showLoader(false);
        return response;
      },
      (error) => {
        useUiStore().showLoader(false);
        if (error.response?.status === 401 || error.response?.status === 403) {
          useUsersStore().logout();
        }
        return Promise.reject(error);
      }
    );
    this.axiosInstance.interceptors.request.use(
      (config) => {
        useUiStore().showLoader(true);
        return config;
      },
      (error) => {
        useUiStore().showLoader(false);
        if (error.response?.status === 401 || error.response?.status === 403) {
          useUsersStore().logout();
        }
        return Promise.reject(error);
      }
    );
  }
  //Вызов запроса
  public async axiosCall<T>(config: AxiosRequestConfig) {
    try {
      const { data } = await this.axiosInstance.request<T>(config);
      return data;
    } catch (error) {
      const err = error as AxiosError;
      if (err.response?.status === 401) {
        alert(`Неверный логин \ пароль`);
      }
      return Promise.reject(err);
    }
  }
  //Установка токена в заголовок
  public setHeaderToken<T>(token: string) {
    try {
      localStorage.setItem('token', token);
      this.axiosInstance.defaults.headers.common['token'] =
        localStorage.getItem('token');
    } catch (error) {
      const err = error as AxiosError;
      return Promise.reject(err);
    }
  }
}

export const api = new AxiosService();
