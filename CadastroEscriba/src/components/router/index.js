import { createRouter, createWebHashHistory } from "vue-router";
import Cadastro from '../Cadastro/Cadastro.vue'

const routes = [
  {
    path: '/',
    name: 'cadastro',
    component: Cadastro
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router;