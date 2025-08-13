import { createRouter, createWebHistory } from 'vue-router'
import ClientesList from '../views/ClientesList.vue'
import ClienteForm from '../views/ClienteForm.vue'

const routes = [
  { path: '/', name: 'clientes', component: ClientesList },
  { path: '/crear', name: 'crear', component: ClienteForm },
  { path: '/editar/:id', name: 'editar', component: ClienteForm, props: true }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
