import './assets/main.css'

import { createApp } from 'vue'
// @ts-expect-error ts doesn't understand these imports and i don't know how to fix it
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
