<script setup>
import { ref, reactive } from "vue";

/*
const name = ref("");
const lastname = ref("");
const email = ref("");
const password = ref("");
const description = ref("");
*/

const user = reactive({
  name: '',
  lastname: '',
  email: '',
  password: '',
  description: '',
});

const inputs = reactive([
  {
    type: 'text',
    placeholder: 'Escribe tu nombre',
    required: false,
  },
  {
    type: 'number',
    placeholder: 'Escribe tu edad',
    required: true,
  },
  {
    type: 'email',
    placeholder: 'Escribe tu correo @algo.com',
    required: false,
  }
]);
</script>

<template>
  <h1>
    Formulario de contacto
  </h1>

  <!--<input type="text" placeholder="Nombre" v-model="name">

  <input type="text" placeholder="Apellido" v-model="lastname">

  <input type="text" placeholder="Email" v-model="email">

  <input type="text" placeholder="Contraseña" v-model="password">

  <textarea placeholder="Describete" v-model="description"></textarea>

  <div>
    <h2>Tu información</h2>
    <p>Tu nombre: {{ name }}</p>
    <p>Tu apellido: {{ lastname }}</p>
    <p>Tu Email: {{ email }}</p>
    <pre>Tu descripción: {{ description }}</pre>
  </div>-->

  <input type="text" placeholder="Nombre" v-model="user.name">

  <input type="text" placeholder="Apellido" v-model="user.lastname">

  <input type="text" placeholder="Email" v-model="user.email">

  <input type="text" placeholder="Contraseña" v-model="user.password">

  <textarea placeholder="Describete" v-model="user.description"></textarea>

  <div>
    <h2>Tu información</h2>
    <p>Tu nombre: {{ user.name }}</p>
    <p>Tu apellido: {{ user.lastname }}</p>
    <p>Tu Email: {{ user.email }}</p>
    <pre>Tu descripción: {{ user.description }}</pre>
  </div>

  <hr>

  <div>
    <input
        v-for="input in inputs"
        :type="input.type"
        :placeholder="input.placeholder"
        :required="input.required"
    >
  </div>
</template>
