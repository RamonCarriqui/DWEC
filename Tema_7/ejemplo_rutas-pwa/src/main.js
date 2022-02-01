import { createApp } from 'vue'
import App from './App.vue'
import{createWebHistory, createRouter} from "vue-router"
import privado from './components/privado'
import HelloWorld from './components/HelloWorld'
import prueba1 from './components/prueba1'
import './registerServiceWorker'

const routes = [
    { path: '/', component: HelloWorld },
    { path: '/privado', component: privado },
    { path: '/prueba1', component: prueba1 }
]
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
})

// createApp(App).mount('#app')
createApp(App).use(router).mount('#app')
