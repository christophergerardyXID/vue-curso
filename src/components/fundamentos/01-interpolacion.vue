<script setup>
let nombre = 'Christopher G.';

const alumnos = ["Chris", "Pedro"];

const persona = {
  nombre: 'Chris',
  lastname: 'Andrade',
}
</script>

<template>
  <p class="text">
    {{ nombre }}
  </p>

  {{ alumnos }}

  <pre>
    {{ persona }}
  </pre>

  <h1>{{ persona.nombre }}</h1>
</template>

<style scoped>
.text {
  background: red;
}
</style>
