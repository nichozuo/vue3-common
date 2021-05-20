import { createApp } from 'vue';
import { router } from './router';
import App from './App';
import { setupAntdv } from './setup/setupAntdv';
import { setupComponents } from './setup/setupComponents';

const app = createApp(App);

setupAntdv(app);
setupComponents(app);

app.use(router).mount('#app');
