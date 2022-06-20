import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { loadFonts } from './plugins/webfontloader'

import { createPinia } from 'pinia'

import './assets/styles/styles.scss'
import vuetify from './plugins/vuetify'
// Ant
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.less';


loadFonts()

createApp(App)
  .use(createPinia())
  .use(Antd)
  .use(router)
  .use(vuetify)
  .mount('#app')
