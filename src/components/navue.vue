<template>
  <header>
    <div class="wrapper">

      <nav>
        <RouterLink v-if="$route.path === '/'" exact-active-class="activo" to="/">Home</RouterLink>
        <RouterLink v-if="$route.path === '/'" exact-active-class="activo" to="/sesion">Inicio Sesión</RouterLink>
        <RouterLink v-if="$route.path === '/'" exact-active-class="activo" to="/registro">Registro</RouterLink>
        <RouterLink v-if="$route.path === '/registro'" exact-active-class="activo" to="/registro">Registro</RouterLink>
        <RouterLink v-if="$route.path === '/registro'" exact-active-class="activo" to="/">Home</RouterLink>
        <RouterLink v-if="$route.path === '/registro'" exact-active-class="activo" to="/sesion">Inicio Sesión</RouterLink>
        <RouterLink v-if="$route.path === '/sesion'" exact-active-class="activo" to="/">Home</RouterLink>
        <RouterLink v-if="$route.path === '/sesion'" exact-active-class="activo" to="/registro">Registro</RouterLink>
        <RouterLink v-if="$route.path === '/sesion'" exact-active-class="activo" to="/sesion">Inicio Sesión</RouterLink>
        <RouterLink v-if="$route.path === '/inventario'" exact-active-class="activo" to="/cerrarsesion">Cerrar Sesión
        </RouterLink>


      </nav>

    </div>
  </header>
</template>


<script lang="ts" setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
header {
  display: flex;
  background-color: #333;
  color: #fff;
  padding: 10px;
}

/* Estilos para el contenedor */
.wrapper {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Estilos para la navegación */
nav {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Estilos para los enlaces de navegación */
nav a {
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  margin: 0 10px;
}

.activo {
  color: rgb(195, 0, 255);
}</style>
