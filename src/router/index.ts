import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    
    {
      path: '/sesion',
      name: 'sesion',
      component: ()=> import('../views/sesionvue.vue')
    },
    {
      path: '/',
      name: 'home',
      component: ()=> import ('../views/homevue.vue')
    },
    {
      path: '/registro',
      name: 'registro',
      component: ()=> import('../views/Registrovue.vue')
    },
    {
      path:'/inventario',
      name: 'inventario',
      component: ()=> import('../views/inventariovue.vue')
    },
    {
      path: '/cerrarsesion',
      name: 'cerrarsesio',
      component: ()=> import('../components/cerrarsesionvue.vue')
    },
    {
      path: '/detalle',
      name: 'detalle',
      component: ()=> import('../components/DetalleEquipo.vue')
    }
  ]
})

export default router
