import { createApp } from 'vue'
import App from './App.vue'

// Vuetify
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import '@mdi/font/css/materialdesignicons.css';

// Router
import router from './router/index'

// Pinia
import { createPinia } from 'pinia'

const pinia = createPinia();

const vuetify = createVuetify({
  icons: {
    iconfont: 'mdi',
  },
  components,
  directives,
});

createApp(App).use(vuetify).use(pinia).use(router).mount('#app');
