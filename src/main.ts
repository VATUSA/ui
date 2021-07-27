import { createApp } from 'vue'
import App from '@/views/app/App.vue'
import router from './router';
import store from './store';
import title from '@/utils/title'

import VATUSALogo from '@/components/global/VATUSALogo.vue';

import '@/assets/css/styles.css'

createApp(App)
	.use(store)
	.use(router)
	.mixin(title)
	.component('VATUSALogo', VATUSALogo)
	.mount('#app')
