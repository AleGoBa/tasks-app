import 'primeicons/primeicons.css';
import './assets/css/main.css';
import { createApp } from 'vue';
import App from './App.vue';
//PrimeVue
import PrimeVueConfig from '../src/config/primevue/index.js';
import PrimeVue from 'primevue/config';
import Tooltip from 'primevue/tooltip';
import ConfirmationService from 'primevue/confirmationservice';
import ToastService from 'primevue/toastservice';
import Select from 'primevue/select';
//Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import router from './router/index.js';
library.add(faUserSecret, fas, far, fab);
//DarkMode
import useDarkMode from '../src/composables/useDarkMode.js';
useDarkMode().applyDarkMode();

createApp(App)
    .use(router)
    .use(PrimeVue, PrimeVueConfig)
    .use(ConfirmationService)
    .use(ToastService)
    //Avoids confusion with base html select tag
    .component('PrimeSelect', Select)
    .component('FontAwesomeIcon', FontAwesomeIcon)
    .directive('tooltip', Tooltip)
    .mount('#app');
