import { createApp } from 'vue'
import App from './App.vue'
// Added by the CLI
import '.register-service-worker';

createApp(App).mount('#app');