import { createApp } from 'vue';
import './styles/style.css';
import { api, router,store  } from './providers/index';
import App from './index.vue';
export const app = createApp(App)
app.use(router)
app.use(store);
