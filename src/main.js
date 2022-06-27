import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { loadFonts } from './plugins/webfontloader'

import { createPinia } from 'pinia'

import './assets/styles/styles.scss'
// Ant
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.less';


loadFonts()

createApp(App)
  .use(createPinia())
  .use(Antd)
  .use(router)
  .mount('#app')
