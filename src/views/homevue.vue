<template>
    <section>
        <div class="port">
      <h1 class="title">INVENTARIO ULEAM</h1>
      <nav>
        <div class="button-container">
          <RouterLink to="/sesion" class="nav-button">Inicio sesión</RouterLink>
          <RouterLink to="https://www.uleam.edu.ec/acerca-de-nosotros" class="nav-button">Acerca de nosotros</RouterLink>
        </div>
      </nav>
    </div>
    </section>
  </template>
  
  <style scoped>
  section {
    background-image: url("https://www.uleam.edu.ec/wp-content/uploads/2019/12/Entrada-Uleam.jpg");
    font-family: Arial, sans-serif;
    background-repeat: no-repeat;
    background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center; 
  height: 100vh;
}
.port{
    background-color: #ffffff6e;
    padding: 25px;
    border-radius: 10px;
}

  /* Estilos para el título */
  .title {
    font-size: 36px;
    color: #333;
    margin-bottom: 10px; 
  }
  
  /* Estilos para el contenedor de botones */
  .button-container {
    display: flex;
    gap: 20px; 
  }
  
  /* Estilos para los botones de navegación */
  .nav-button {
    background-color: rgba(51, 148, 55, 0.993);
    color: #fff;
    text-decoration: none; 
    padding: 10px 20px; 
    border: none; 
    border-radius: 5px; 
    font-weight: bold; 
    cursor: pointer; 
  }
  
  .nav-button:hover {
    background-color: rgba(36, 100, 38, 0.993);
  }
  </style>
  

<script lang="ts" setup>

</script>



