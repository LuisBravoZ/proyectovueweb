<template>
  <div id="app">
    <!-- Agregar equipos -->
    <section id="Agregar">
      <button @click="abrirModal">Nuevo equipo</button>

      <!-- Modal -->
      <div class="modal" v-if="modalVisible">
        <div class="modal-content">
          <label for="modalSerial">Número de Serie:</label>
          <input type="text" v-model="modalSerial">

          <label for="modalName">Nombre del Equipo:</label>
          <input type="text" v-model="modalName">

          <label for="modalType">Tipo de Equipo:</label>
          <input type="text" v-model="modalType">

          <label for="modalCantidad">Cantidad:</label>
          <input type="text" v-model="modalCantidad">

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
              <button @click="verDetalles(index)">Ver Detalles</button>
              <button @click="editarEquipo(index)">Editar</button>
              <button @click="eliminarEquipo(index)">Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </section>

    <!-- Nuevo componente para mostrar detalles de un equipo -->
    <DetalleEquipo
      v-if="detalleVisible"
      :equipo="equipoSeleccionado"
      @cerrar="cerrarDetalles"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import DetalleEquipo from '../components/DetalleEquipo.vue'; // Asegúrate de ajustar la ruta correcta

const modalVisible = ref(false);
const modalSerial = ref('');
const modalName = ref('');
const modalType = ref('');
const modalCantidad = ref('');
const modalFacultad = ref('Facultad de informatica');
const facultadSeleccionada = ref('todas');
const inventario = ref([
  // Puedes inicializar el inventario con datos de ejemplo si lo deseas
]);

const detalleVisible = ref(false);
const equipoSeleccionado = ref(null);

const cerrarModal = () => {
  modalVisible.value = false;
  limpiarDatosModal();
};

const abrirModal = () => {
  modalVisible.value = true;
};

const agregarEquipoDesdeModal = () => {
  if (!modalSerial.value || !modalName.value || !modalType.value || !modalCantidad.value || !modalFacultad.value) {
    alert('Por favor, complete todos los campos.');
    return;
  }

  const nuevoEquipo = {
    numeroSerie: modalSerial.value,
    nombre: modalName.value,
    tipo: modalType.value,
    cantidad: modalCantidad.value,
    facultad: modalFacultad.value,
  };

  inventario.value.push(nuevoEquipo);
  cerrarModal();
};

const limpiarDatosModal = () => {
  modalSerial.value = '';
  modalName.value = '';
  modalType.value = '';
  modalCantidad.value = '';
  modalFacultad.value = 'Facultad de informatica';
};

const filtrarPorFacultad = () => {
  if (facultadSeleccionada.value === 'todas') {
    return inventario.value;
  } else {
    return inventario.value.filter((equipo) => equipo.facultad === facultadSeleccionada.value);
  }
};

const verDetalles = (index) => {
  equipoSeleccionado.value = inventario.value[index];
  detalleVisible.value = true;
};

const cerrarDetalles = () => {
  detalleVisible.value = false;
  equipoSeleccionado.value = null;
};

const editarEquipo = (index) => {
  const equipoSeleccionado = inventario.value[index];
  modalSerial.value = equipoSeleccionado.numeroSerie;
  modalName.value = equipoSeleccionado.nombre;
  modalType.value = equipoSeleccionado.tipo;
  modalCantidad.value = equipoSeleccionado.cantidad;
  modalFacultad.value = equipoSeleccionado.facultad;

  inventario.value.splice(index, 1);

  abrirModal();
};

const eliminarEquipo = (index) => {
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
