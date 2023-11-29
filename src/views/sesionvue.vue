<template>
  <section>
    <form @submit.prevent="handleSubmit">
      <h2 class="inicio">Iniciar Sesión</h2>

      <label for="username">Usuario:</label>
      <input v-model="username" type="text" id="username" name="username" required :class="{ 'error': !isUsernameValid && username !== '' }">
      <span v-if="!isUsernameValid && username !== ''" class="error-message">{{ getUsernameErrorMessage() }}</span>

      <label for="password">Contraseña:</label>
      <input v-model="password" type="password" id="password" name="password" required :class="{ 'error': !isPasswordValid && password !== '' }">
      <span v-if="!isPasswordValid && password !== ''" class="error-message">{{ getPasswordErrorMessage() }}</span>

      <button type="submit" :disabled="!isFormValid">Iniciar Sesión</button>
    </form>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const username = ref('');
const password = ref('');

const isUsernameValid = computed(() => {
  const usernameRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z0-9_]{8,20}$/;
  return usernameRegex.test(username.value);
});

const isPasswordValid = computed(() => {
  const passwordRegex = /^.{8,}$/;
  return passwordRegex.test(password.value);
});

const isFormValid = computed(() => isUsernameValid.value && isPasswordValid.value);

const handleSubmit = () => {
  if (isFormValid.value) {
    console.log('Formulario válido. Iniciando sesión...');
    const storedUserData = localStorage.getItem('userData');

    if (storedUserData) {
      try {
        const userData = JSON.parse(storedUserData);

        if (userData.username === username.value && userData.password === password.value) {
          // Inicio de sesión exitoso, redirigir a la página principal
          router.push('/inventario');
        } else {
          // Contraseña incorrecta
          console.log('Contraseña incorrecta');
        }
      } catch (error) {
        console.error('Error al parsear datos de usuario:', error);
      }
    } else {
      // No hay datos almacenados
      console.log('No hay datos almacenados');
    }
  }
};

const getUsernameErrorMessage = computed(() => {
  if (!isUsernameValid.value) {
    return 'El nombre de usuario debe tener mínimo 8 caracteres y contener al menos una letra mayúscula, una letra minúscula y un número.';
  }
  return '';
});

const getPasswordErrorMessage = computed(() => {
  if (!isPasswordValid.value) {
    return 'La contraseña debe tener al menos 8 caracteres.';
  }
  return '';
});
</script>

<style>
.error {
  border-color: red;
}

.error-message {
  color: red;
}

form {
    background-color: #ffffff7e;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    max-width: 300px;
    width: 100%;
    }
    label {
    display: block;
    margin-bottom: 8px;
    }
    input {
    width: 100%;
    padding: 8px;
    margin-bottom: 12px;
    box-sizing: border-box;
    }
    button {
    background-color: #241c1ce1;
    color: rgb(255, 255, 255);
    padding: 10px;
    border: none;
    cursor: pointer;
    border-radius: 4px;
    width: 100%;
    }
    button:hover {
    background-color: #8b6d6de1;
    }
    .regi{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    }
    #registro{
    width: 50%;
    background-color: rgba(51, 148, 55, 0.993);
    color:black
    }
    #registro:hover{
    background-color: rgba(36, 100, 38, 0.993);
    color:rgb(196, 195, 195)
    }
    .inicio{
    display: flex;
    justify-content: center;
    align-items: center;
    }
   
</style>
