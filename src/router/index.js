import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CreateTodo from '../components/CreateTodo.vue'
import Edit from '../components/EditTodo.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/create',
    name: 'CreateTodo',
    component: CreateTodo
  },
  {
    path: '/edit/:id',
    name: 'Edit',
    component: Edit
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
