import { createApp } from 'vue'
import './style.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import App from './App.vue'
import router from './router';
import {appAxios} from './utils/appAxios'


const app = createApp(App)
app.use(router)
app.config.globalProperties.$appAxios = appAxios;
app.mount('#app')
