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
    font-size: 36px;
    color: #333; 
    margin-bottom: 10px; 
  }
  
  /* Estilos para el subtítulo */
  .subtitle {
    font-size: 20px; 
    color: #666; 
    margin-bottom: 20px; 
  }
  
  /* Estilos para la navegación */
  nav {
    background-color: #333; 
    padding: 10px; 
    border-radius: 5px; 
  }
  
  /* Estilos para los enlaces de navegación */
  .nav-link {
    color: #fff; 
    text-decoration: none; 
    margin-right: 20px; 
    font-weight: bold; 
  }
  
  .nav-link:hover {
    text-decoration: underline; 
  }
  </style>
  