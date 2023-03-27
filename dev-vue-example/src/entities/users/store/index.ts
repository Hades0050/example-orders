import { api } from './../../../app/providers/axios';
import { usersApi } from './../api/index';
import { defineStore } from 'pinia';
import { User } from '../model';
import {  router } from '../../../app/providers';

export const useUsersStore = defineStore('users', {
  state: () => ({
    user: JSON.parse(localStorage.getItem('user')!) as User | null,
    returnUrl: '',
  }),
  getters: {},
  actions: {
    //Вход
    async login(val: User) {
      const response = await usersApi.login(val);
      const { user, token } = response;
      localStorage.setItem('user', JSON.stringify(user));
      this.user = user;
      api.setHeaderToken( token);
      router.push(this.returnUrl || '/');
    },
    //Выход
    logout() {
      this.user = null;
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      router.push('/login');
    },
  },
});
