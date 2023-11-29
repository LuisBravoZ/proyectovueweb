<!-- DetalleEquipo.vue -->

<template>
    <div class="detalle-equipo">
      <div class="detalle-content">
        <h2>Detalles del Equipo</h2>
        <div>
          <strong>Número de Serie:</strong> {{ equipo.numeroSerie }}
        </div>
        <div>
          <strong>Nombre del Equipo:</strong> {{ equipo.nombre }}
        </div>
        <div>
          <strong>Tipo de Equipo:</strong> {{ equipo.tipo }}
        </div>
        <div>
          <strong>Cantidad:</strong> {{ equipo.cantidad }}
        </div>
        <div>
          <strong>Facultad:</strong> {{ equipo.facultad }}
        </div>
        <button @click="cerrarDetalles">Cerrar Detalles</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineProps, ref } from 'vue';
  
  const { equipo } = defineProps(['equipo']);
  const emit = defineEmits();
  
  const cerrarDetalles = () => {
    emit('cerrar'); // Emitir el evento para que el componente padre maneje el cierre
  };
  </script>
  
  
  
  <style scoped>
  .detalle-equipo {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    border: 2px solid #4caf50;
    max-width: 400px;
    padding: 15px;
  }
  
  .detalle-content {
    text-align: left;
  }
  
  .detalle-content h2 {
    margin-bottom: 15px;
  }
  
  .detalle-content div {
    margin-bottom: 10px;
  }
  
  .detalle-content strong {
    margin-right: 5px;
  }
  
  .detalle-content button {
    background-color: #4caf50;
    color: #fff;
    padding: 0.5em 1em;
    border: none;
    cursor: pointer;
  }
  </style>
  