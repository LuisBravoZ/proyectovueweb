<script lang="ts" setup>

</script>

<template>
    <section>
      <h1 class="title">INVENTARIO ULEAM</h1>
      <nav>
        <ul>
          <li>
            <RouterLink to="/sesion" class="nav-link">Inicio sesion</RouterLink>
          </li>
          <li>
            <RouterLink to="" class="nav-link">Acerca de nosotros</RouterLink>
          </li>
        </ul>
      </nav>
    </section>
  </template>
  
  <style scoped>
  /* Estilos para el título */
  .title {
    font-size: 36px; /* Tamaño del título */
    color: #333; /* Color del texto */
    margin-bottom: 10px; /* Espaciado inferior */
  }
  
  /* Estilos para el subtítulo */
  .subtitle {
    font-size: 20px; /* Tamaño del subtítulo */
    color: #666; /* Color del texto */
    margin-bottom: 20px; /* Espaciado inferior mayor */
  }
  
  /* Estilos para la navegación */
  nav {
    background-color: #333; /* Color de fondo del menú de navegación */
    padding: 10px; /* Espaciado interior */
    border-radius: 5px; /* Bordes redondeados */
  }
  
  /* Estilos para los enlaces de navegación */
  .nav-link {
    color: #fff; /* Color del texto de enlace */
    text-decoration: none; /* Elimina la subrayado de los enlaces */
    margin-right: 20px; /* Espaciado entre enlaces */
    font-weight: bold; /* Texto en negrita */
  }
  
  .nav-link:hover {
    text-decoration: underline; /* Subrayado en el hover */
  }
  </style>
  