<template>
  <section>
    <form @submit.prevent="handleSubmit">
      <div>
        <label for="nombre">Nombre:<br></label>
        <input v-model="nombre" id="nombre" name="nombre" type="text">
        <span v-if="!isNombreValid && nombre !== ''" class="mensaje">{{ getNombreErrorMessage }}</span>
      </div>
      <div>
        <label for="apellido">Apellido: <br></label>
        <input v-model="apellido" id="apellido" name="apellido" type="text">
        <span v-if="!isApellidoValid && apellido !== ''" class="mensaje">{{ getApellidoErrorMessage }}</span>
      </div>
      <div>
        <label for="usuario">Usuario: <br></label>
        <input v-model="username" id="usuario" name="usuario" type="text">
        <span v-if="!isUsernameValid && username !== ''" class="mensaje">{{ getUsernameErrorMessage }}</span>
      </div>
      <div>
        <label for="telefono">Telefono: <br></label>
        <input v-model="telefono" id="telefono" name="telefono" type="text">
        <span v-if="!isTelefonoValid && telefono !== ''" class="mensaje">{{ getTelefonoErrorMessage }}</span>
      </div>
      <div>
        <label for="email">Correo: <br></label>
        <input v-model="email" id="email" name="email" type="email">
        <span v-if="!isEmailValid && email !== ''" class="mensaje">{{ getEmailErrorMessage }}</span>
      </div>
      <div>
        <label for="contraseña">Nueva contraseña: <br></label>
        <input v-model="password" id="contraseña" name="contraseña" type="password">
        <span v-if="!isPasswordValid && password !== ''" class="mensaje">{{ getPasswordErrorMessage }}</span>
      </div>
      <div>
        <label for="contraseña2">Confirmar contraseña: <br></label>
        <input v-model="password2" id="contraseña2" name="contraseña2" type="password">
        <span v-if="!isPassword2Valid && password2 !== ''" class="mensaje">{{ getPassword2ErrorMessage }}</span>
      </div>
      <div id="botonregistro">
        <button id="registrarse" type="submit" :disabled="!isFormValid">Registrarse</button>
      </div>
      <div id="mensaje8"></div>
    </form>
  </section>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const nombre = ref('');
const apellido = ref('');
const telefono = ref('');
const email = ref('');
const username = ref('');
const password = ref('');
const password2 = ref('');

const isNombreValid = computed(() => /^[a-zA-Z' ]{3,20}$/.test(nombre.value));
const isApellidoValid = computed(() => /^[a-zA-Z' ]{3,20}$/.test(apellido.value));
const isTelefonoValid = computed(() => /^[0-9]{10}$/.test(telefono.value));
const isEmailValid = computed(() => /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email.value));
const isUsernameValid = computed(() => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z0-9_]{8,20}$/.test(username.value));
const isPasswordValid = computed(() => /^.{8,}$/.test(password.value));
const isPassword2Valid = computed(() => password2.value === password.value);

const isFormValid = computed(() => isUsernameValid.value && isPasswordValid.value &&
  isApellidoValid.value && isNombreValid.value && isTelefonoValid.value &&
  isEmailValid.value && isPassword2Valid.value);

const handleSubmit = () => {
  if (isFormValid.value) {
    console.log('Formulario válido. Registrándose...');
    // router.push('/sesion');
    const userData = {
      nombre: nombre.value,
      apellido: apellido.value,
      telefono: telefono.value,
      email: email.value,
      username: username.value,
      password: password.value,
    };
    localStorage.setItem('userData', JSON.stringify(userData));
    router.push('/sesion');
  }
};

  
  const getNombreErrorMessage = computed(() => (
    !isNombreValid.value && nombre.value !== '') 
    ? 'Ingrese un nombre correcto' : '');
  
    const getApellidoErrorMessage = computed(() => 
    (!isApellidoValid.value && apellido.value !== '') 
    ? 'Ingrese un apellido correcto' : '');
  
    const getTelefonoErrorMessage = computed(() => 
    (!isTelefonoValid.value && telefono.value !== '') 
    ? 'Ingrese un número de teléfono válido' : '');
  
    const getEmailErrorMessage = computed(() => 
    (!isEmailValid.value && email.value !== '') 
    ? 'Ingrese una dirección de correo electrónico válida' : '');
  
    const getUsernameErrorMessage = computed(() => 
    (!isUsernameValid.value && username.value !== '') 
    ? 'El nombre de usuario debe tener mínimo 8 caracteres y contener al menos una letra mayúscula, una letra minúscula y un número.' : '');
  
    const getPasswordErrorMessage = computed(() => 
    (!isPasswordValid.value && password.value !== '') 
    ? 'La contraseña debe tener al menos 8 caracteres.' : '');
  
    const getPassword2ErrorMessage = computed(() => 
    (!isPassword2Valid.value && password2.value !== '') 
    ? 'Las contraseñas no coinciden.' : '');
  
  </script>
  

<style lang="postcss" scoped>

.mensaje{
    color: red;
}

form {
    background-color: #ffffff7e;
    margin: 10px;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    max-width: 300px;
    width: 100%;
    
    
    align-items: center;
    justify-content: center;
}
label {
            
    display: block;
    margin-bottom: 5px;
}

input {
    
    width: 100%;
    padding: 5px;
    margin-bottom: 10px;
    box-sizing: border-box;
}

button{
    background-color: rgba(51, 148, 55, 0.993);
    color: #f4f4f4;
    padding: 10px;
    margin: 10px;
    border-radius: 4px;
    border: none;
    cursor: pointer;
}
button:hover{
    background-color: rgba(36, 100, 38, 0.993);
    color: #f4f4f4;
  
}

#atras{
    display: flex;
    margin: 0px 0px 10px 0px;
}

#botonregistro{
    display:  flex;
    justify-content: center;
    text-align: center;
    align-items: center;
}
section {
    background-image: url("https://www.uleam.edu.ec/wp-content/uploads/2019/12/Entrada-Uleam.jpg");
    font-family: Arial, sans-serif;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #f4f4f4;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
</style>
