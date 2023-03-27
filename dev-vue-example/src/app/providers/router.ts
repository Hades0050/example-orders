import { createRouter, createWebHashHistory } from 'vue-router';
import { useUsersStore } from '../../entities';
import routes from '../../pages';

export const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes,
});

router.beforeEach(async (to) => {
  const publicPages = ['/login'];
  const auth = useUsersStore();
  const authRequired = !publicPages.includes(to.path);
  if (authRequired && !auth.user) {
    auth.returnUrl = to.fullPath;
    auth.logout()
    return '/login';
  }
});

