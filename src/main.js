import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';

import { createPinia } from 'pinia'

// import './assets/css/main.css';
import 'primevue/resources/themes/aura-light-green/theme.css';
import router from "./router.js";

/*import 'vuetify/styles';
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
})
*/
const pinia = createPinia();
const app = createApp(App);

// app.use(vuetify);
app.use(PrimeVue);
app.use(router);
app.use(pinia);

app.mount('#app');
