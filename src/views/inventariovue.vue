<template>
  <div id="app">
    <!-- Agregar equipos -->
    <section id="Agregar">
      <button @click="abrirModal">Nuevo equipo</button>

      <!-- Modal -->
      <div class="modal" v-if="modalVisible">
        <div class="modal-content">
          <label for="modalSerial">Número de Serie:</label>
          <input type="text" v-model="modalSerial" required>

          <label for="modalName">Nombre del Equipo:</label>
          <input type="text" v-model="modalName" required>

          <label for="modalType">Tipo de Equipo:</label>
          <input type="text" v-model="modalType" required>

          <label for="modalCantidad">Cantidad:</label>
          <input type="text" v-model="modalCantidad" required>

          <label for="modalStorage">Capacidad de Almacenamiento (GB):</label>
<input type="text" v-model="modalStorage">

<label for="modalRAM">Memoria RAM (GB):</label>
<input type="text" v-model="modalRAM">

<label for="modalProcessor">Procesador:</label>
<input type="text" v-model="modalProcessor">

<label for="modalFechaAdquisicion">Fecha de Adquisición:</label>
<input type="date" v-model="modalFechaAdquisicion" required>

<label for="modalEstado">Estado:</label>
<select v-model="modalEstado" required>
  <option value="En Uso">En Uso</option>
  <option value="En Mantenimiento">En Mantenimiento</option>
  <option value="Dado de Baja">Dado de Baja</option>
</select>

<label for="modalResponsable">Responsable:</label>
<input type="text" v-model="modalResponsable">

<label for="modalHistorialMantenimiento">Historial de Mantenimiento:</label>
<textarea v-model="modalHistorialMantenimiento"></textarea>

          <label for="modalFacultad">Facultad:</label>
          <select v-model="modalFacultad" required>
            <option value="Facultad de informatica">Facultad de informatica</option>
            <option value="Facultad Comunicación">Facultad Comunicación</option>
            <option value="Facultad Enfermeria">Facultad Enfermeria</option>
            <!-- Agrega más opciones según sea necesario -->
          </select>

          <button @click="agregarEquipoDesdeModal">Agregar Equipo</button>
          <button @click="cerrarModal">Cancelar</button>
        </div>
      </div>
    </section>

    <section id="lista-inventario">
      <h2>Inventario Actual</h2>
      <label for="facultadFilter">Filtrar por Facultad:</label>
      <select v-model="facultadSeleccionada" @change="filtrarPorFacultad">
        <option value="todas">Todas las Facultades</option>
        <option value="Facultad de informatica">Facultad de informatica</option>
        <option value="Facultad Comunicación">Facultad Comunicación</option>
        <option value="Facultad Enfermeria">Facultad Enfermeria</option>
        <!-- Agrega más opciones según sea necesario -->
      </select>

      <table>
        <thead>
          <tr>
            <th>Número de Serie</th>
            <th>Nombre del Equipo</th>
            <th>Tipo de Equipo</th>
            <th>Cantidad</th>
            <th>Facultad</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in filtrarPorFacultad()" :key="index">
            <td>{{ item.numeroSerie }}</td>
            <td>{{ item.nombre }}</td>
            <td>{{ item.tipo }}</td>
            <td>{{ item.cantidad }}</td>
            <td>{{ item.facultad }}</td>
            <td>
              <button @click="verDetallesCompleto(index)">Ver Detalles completo</button>
              <button @click="editarEquipo(index)">Editar</button>
              <button @click="eliminarEquipo(index)">Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </section>

    <!-- Nuevo componente para mostrar detalles de un equipo -->
    <DetalleEquipoCompleto
  v-if="detalleCompletoVisible && equipoSeleccionado !== null"
  :equipo="equipoSeleccionado"
  @cerrar="cerrarDetallesCompleto"
/>
  </div>
</template>

<script lang="ts" setup>
import { ref , onBeforeUnmount } from 'vue';
import type { Ref } from 'vue';
import DetalleEquipo from '../components/DetalleEquipo.vue'; // Asegúrate de ajustar la ruta correcta
import DetalleEquipoCompleto from '../components/DetalleEquipoCompleto.vue';

interface Equipo {
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
}

const modalVisible = ref(false);
const modalSerial = ref('');
const modalName = ref('');
const modalType = ref('');
const modalCantidad = ref('');
const modalFacultad = ref('Facultad de informatica');
const facultadSeleccionada = ref('todas');
const modalStorage = ref('');
const modalRAM = ref('');
const modalProcessor = ref('');
const modalFechaAdquisicion = ref('');
const modalEstado = ref('En Uso');
const modalResponsable = ref('');
const modalHistorialMantenimiento = ref('');

const inventario: Ref<Equipo[]> = ref([]);
//const inventario = ref([
  // Puedes inicializar el inventario con datos de ejemplo si lo deseas
//]);

const detalleVisible = ref(false);
//const equipoSeleccionado = ref(null);
const equipoSeleccionado = ref<Equipo | null>(null);
  
const cargarDatosLocales = () => {
  const datosGuardados = localStorage.getItem('inventario');
  if (datosGuardados) {
    inventario.value = JSON.parse(datosGuardados);
  }
};
onBeforeUnmount(() => {
  localStorage.setItem('inventario', JSON.stringify(inventario.value));
});
cargarDatosLocales();

const cerrarModal = () => {
  modalVisible.value = false;
  limpiarDatosModal();
};

const abrirModal = () => {
  modalVisible.value = true;
};

const agregarEquipoDesdeModal = () => {
  
  // Validar que Número de Serie sea un número
  if (!/^\d+$/.test(modalSerial.value)) {
    alert('El Número de Serie debe contener solo números.');
    return;
  }

  // Validar que Cantidad sea un número
  if (!/^\d+$/.test(modalCantidad.value)) {
    alert('La Cantidad debe contener solo números.');
    return;
  }

  // Validar que Capacidad de Almacenamiento sea un número
  if (!/^\d+$/.test(modalStorage.value)) {
    alert('La Capacidad de Almacenamiento debe contener solo números.');
    return;
  }
 // Validar que RAM sea un número
 if (!/^\d+$/.test(modalRAM.value)) {
    alert('La RAM debe contener solo números.');
    return;
  }

  if (!modalSerial.value || !modalName.value || !modalType.value || !modalCantidad.value || !modalFacultad.value) {
    alert('Por favor, complete todos los campos.');
    return;
  }
  const nuevoEquipo: Equipo = {
    numeroSerie: modalSerial.value,
    nombre: modalName.value,
    tipo: modalType.value,
    cantidad: modalCantidad.value,
    facultad: modalFacultad.value,
    storage: modalStorage.value,
    ram: modalRAM.value,
    processor: modalProcessor.value,
    fechaAdquisicion: modalFechaAdquisicion.value,
    estado: modalEstado.value,
    responsable: modalResponsable.value,
    historialMantenimiento: modalHistorialMantenimiento.value.split('\n').map(m => m.trim()).filter(m => m !== ''),
  };
 

  inventario.value.push(nuevoEquipo);
  cerrarModal();
  localStorage.setItem('inventario', JSON.stringify(inventario.value));
};

const limpiarDatosModal = () => {
  modalSerial.value = '';
  modalName.value = '';
  modalType.value = '';
  modalCantidad.value = '';
  modalFacultad.value = 'Facultad de informatica';
  modalStorage.value = ''; 
  modalRAM.value = ''; 
  modalProcessor.value = ''; 
  modalFechaAdquisicion.value = ''; 
  modalEstado.value = 'En Uso'; 
  modalResponsable.value = ''; 
  modalHistorialMantenimiento.value = ''; 
};


const filtrarPorFacultad = () => {
  if (facultadSeleccionada.value === 'todas') {
    return inventario.value;
  } else {
    return inventario.value.filter((equipo) => equipo.facultad === facultadSeleccionada.value);
  }
};

const verDetalles = (index: number) => {
  equipoSeleccionado.value = inventario.value[index];
  detalleVisible.value = true;
};

const cerrarDetalles = () => {
  detalleVisible.value = false;
  equipoSeleccionado.value = null;
};
const detalleCompletoVisible = ref(false);

const verDetallesCompleto = (index: number) => {
  equipoSeleccionado.value = filtrarPorFacultad()[index];
  detalleCompletoVisible.value = true;
};

const cerrarDetallesCompleto = () => {
  detalleCompletoVisible.value = false;
};

const editarEquipo = (index: number) => {
  const equipoSeleccionado = inventario.value[index];

  // Asignar valores al modal
  modalSerial.value = equipoSeleccionado.numeroSerie;
  modalName.value = equipoSeleccionado.nombre;
  modalType.value = equipoSeleccionado.tipo;
  modalCantidad.value = equipoSeleccionado.cantidad;
  modalFacultad.value = equipoSeleccionado.facultad;
  modalStorage.value = equipoSeleccionado.storage;
  modalRAM.value = equipoSeleccionado.ram;
  modalProcessor.value = equipoSeleccionado.processor;
  modalFechaAdquisicion.value = equipoSeleccionado.fechaAdquisicion;
  modalEstado.value = equipoSeleccionado.estado;
  modalResponsable.value = equipoSeleccionado.responsable;
  modalHistorialMantenimiento.value = equipoSeleccionado.historialMantenimiento.join('\n');

  // Eliminar el equipo seleccionado del inventario
  inventario.value.splice(index, 1);

  // Abrir el modal con los datos del equipo seleccionado
  abrirModal();
};


const eliminarEquipo = (index: number) => {
  const confirmarEliminar = window.confirm('¿Estás seguro de que deseas eliminar este equipo?');

  if (confirmarEliminar) {
    inventario.value.splice(index, 1);
  }
};

</script>

<style lang="postcss" scoped>

/* Estilos para la sección "Agregar" */
#Agregar {
  margin: 20px;
}

#Agregar button {
  background-color: #4caf50;
  color: #fff;
  padding: 0.5em 1em;
  border: none;
  cursor: pointer;
}

/* Estilos para el modal */
.modal {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #918c8c;
  border: 2px solid #4caf50;
  max-width: 600px;
  padding: 15px;
  /* Centrar */
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.modal label,
.modal input,
.modal select,
.modal button {
  display: block;
  margin-bottom: 5px;
  width: 100%;
}

.modal button {
  cursor: pointer;
  background-color: #4caf50;
  color: #fff;
  padding: 0.5em 1em;
  margin: 5px;
  border: none;
  border-radius: 4px;
}

.modal button:last-child {
  background-color: #ff5555;
}

#addEquipmentModal {
  display: none;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

#addEquipmentModal label,
#addEquipmentModal input,
#addEquipmentModal select,
#addEquipmentModal button {
  display: block;
  margin-bottom: 10px;
}

/* Estilos para la sección "inventory-list" */
#lista-inventario {
  margin: 20px;
}

#lista-inventario table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

#lista-inventario th,
#lista-inventario td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

#lista-inventario th {
  background-color: #333;
  color: #fff;
}

/* Estilos para el modal cuando está visible */
.modal-content {
  max-width: 400px;
  margin: auto;
}

/* Estilos para el botón "Nuevo equipo" */
#Agregar button.nuevo-equipo {
  background-color: #30b434;
  color: #fff;
  padding: 0.5em 1em;
  border: none;
  cursor: pointer;
  width: 20%;
}

/* Cambiar cursor en botones del modal */
#addEquipmentModal button {
  cursor: pointer;
}

/* Estilo para el botón de cancelar del modal */
#addEquipmentModal button:last-child {
  background-color: #ff5555;
  color: #fff;
}

.boton-editar,
.boton-eliminar {
  background-color: rgb(3, 41, 253);
  color: white;
  border: none;
  padding: 8px 12px;
  cursor: pointer;
  margin: 4px;
}

button{
  margin: 5px;
}
.boton-eliminar {
  margin-left: 8px;
}

</style>
