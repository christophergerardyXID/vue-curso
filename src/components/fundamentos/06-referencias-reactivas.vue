<script setup>
import { ref, reactive } from "vue";

const counter = ref(0);

const increment = () => {
  counter.value = counter.value + 1;
}

const decrement = () => {
  counter.value = counter.value -1;
}

const chris = reactive({
  nombre: 'Christopher',
  apellido: 'Andrade',
  age: 25,
});

const cambiarPersona = () => {
  chris.nombre = 'Chris';
  chris.apellido = 'Lazcano';
  chris.age = 26;
}

const fruitsTypes = ["Manzana", "Pera", "Uva", "Platano"];
const fruits = reactive([]);

const addFruit = (fruit) => {
  fruits.push(fruit);
}
</script>

<template>
  <button @click="increment">
    Incrementar
  </button>

  <h1>
    Contador: {{ counter }}
  </h1>

  <button @click="decrement">
    Decrementar
  </button>

  <hr>

  <h1>Nombre: {{ chris.nombre }}</h1>
  <h2>Apellido: {{ chris.apellido }}</h2>
  <h3>Edad: {{ chris.age }}</h3>

  <button @click="cambiarPersona">
    Cambiar persona
  </button>

  <hr>

  <h1>
    Frutas
  </h1>

  <ul>
    <li v-for="fruit in fruits">
      {{ fruit }}
    </li>
  </ul>

  <!---
  <button @click="addFruit('Manzana')">
    manzana
  </button>

  <button @click="addFruit('Pera')">
    Pera
  </button>

  <button @click="addFruit('Uva')">
    Uva
  </button>

  <button @click="addFruit('Platano')">
    Platano
  </button>
  -->

  <button v-for="fruit in fruitsTypes" @click="addFruit(fruit)">
    {{ fruit }}
  </button>
</template>

<style scoped>

</style>
