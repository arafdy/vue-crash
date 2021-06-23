import { createApp } from 'vue'

//app
import App from './App.vue'

//router
import router from './router'

const app = createApp(App)

app.use(router)
app.mount("#app")