<script lang="ts" setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const cerrarSesion = () => {
  //  para cerrar sesión
  router.push('/sesion');
};

const cancelarCierreSesion = () => {
  router.go(-1); 
};
</script>

<template>
  <div class="sesioncerrar">
    <p>¿Estás seguro de cerrar sesión?</p>
    <div class="botones">
      <button class="boton-pequeno" @click="cerrarSesion">Cerrar sesión</button>
      <button class="boton-pequeno" @click="cancelarCierreSesion">Cancelar</button>
    </div>
  </div>
</template>
<style lang="postcss" scoped>

.sesioncerrar {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; /* Aprovecha el 100% del alto de la ventana */
}

.botones {
  margin-top: 16px; /* Espaciado superior entre el texto y los botones */
padding: 10px;
}
.boton-pequeno{
  padding: 10px;
  margin: 10px;
}


</style>
