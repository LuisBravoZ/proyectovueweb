<script lang="ts" setup>
import { useRouter } from 'vue-router';

const cerrarSesion = () => {
  // Aquí puedes realizar las acciones necesarias para cerrar la sesión
 
  // Redirige a la página especificada
  const router = useRouter();
  window.location.href = '/sesion'};
 
</script>

<template>
    <button @click="cerrarSesion" >Cerrar sesion</button>
</template>

<style lang="postcss" scoped>
    
</style>
