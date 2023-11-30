<template>
  <header>
    <div class="wrapper">

      <nav>
        <RouterLink v-if="$route.path !=='/'" exact-active-class="activo" to="/">Home</RouterLink>
        <RouterLink v-if="$route.path !=='/registro'" exact-active-class="activo" to="/registro">Registro</RouterLink>
        <RouterLink v-if="$route.path !=='/sesion'" exact-active-class="activo" to="/sesion">Inisio sesion</RouterLink>
        <RouterLink v-if="$route.path === '/inventario'" exact-active-class="activo" to="/cerrarsesion">Cerrar Sesión</RouterLink>
        
      </nav>

    </div>
  </header>
</template>


<script lang="ts" setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
/* Estilos para el encabezado */
header {
  display: flex;
  background-color: #333; /* Cambia el color de fondo según tus preferencias */
  color: #fff; /* Cambia el color del texto según tus preferencias */
  padding: 10px; /* Añade espaciado interior según tus necesidades */
}

/* Estilos para el contenedor */
.wrapper {
  max-width: 1200px; /* Establece el ancho máximo del contenedor */
  margin: 0 auto; /* Centra el contenido en el contenedor */
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
  color: #fff; /* Cambia el color de los enlaces según tus preferencias */
  text-decoration: none; /* Elimina la subrayado de los enlaces */
  font-weight: bold; /* Añade negrita si es necesario */
  margin: 0 10px;
}

.activo{
  color:rgb(195, 0, 255);
}
</style>
