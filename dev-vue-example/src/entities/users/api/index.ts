import { api } from '../../../app/providers/axios';
import { User } from '../model';

export default class UsersApi {
  async login(user: User) {
    return api.axiosCall<{ user: User; token: string }>({
      url: `/login`,
      method: 'post',
      data: user,
    });
  }
}

export const usersApi = new UsersApi();
