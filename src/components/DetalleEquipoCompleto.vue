<!-- DetalleEquipoCompleto.vue -->
<template>
  <div v-if="equipo" class="modal-overlay">
    <div class="modal-container">
      <h2>Detalles del Equipo</h2>
      <p><strong>Número de Serie:</strong> {{ equipo.numeroSerie }}</p>
      <p><strong>Nombre del Equipo:</strong> {{ equipo.nombre }}</p>
      <p><strong>Tipo de Equipo:</strong> {{ equipo.tipo }}</p>
      <p><strong>Cantidad:</strong> {{ equipo.cantidad }}</p>
      <p><strong>Facultad:</strong> {{ equipo.facultad }}</p>
      <p><strong>Fecha de Adquisición:</strong> {{ equipo.fechaAdquisicion }}</p>
      <p><strong>Estado:</strong> {{ equipo.estado }}</p>
      <p><strong>Responsable:</strong> {{ equipo.responsable }}</p>
      <p><strong>Historial de Mantenimiento:</strong></p>
      <ul>
        <li v-for="evento in equipo.historialMantenimiento" :key="evento">{{ evento }}</li>
      </ul>
      <button @click="$emit('cerrar')">Cerrar</button>
    </div>
  </div>
  <div v-else>
    <p>El equipo no tiene detalles disponibles.</p>
    <button @click="$emit('cerrar')">Cerrar</button>
  </div>
</template>

<script setup lang="ts">

const props = defineProps<{
  equipo: {
    numeroSerie: string;
    nombre: string;
    tipo: string;
    cantidad: string;
    facultad: string;
    storage: string;
    ram: string;
    processor: string;
    fechaAdquisicion: string;
    estado: string;
    responsable: string;
    historialMantenimiento: string[];
  } | null;
}>();
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-container {
  background-color: #fff;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}
</style>
