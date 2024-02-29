<script setup>
import {computed, reactive, ref} from "vue";
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';

const numero1 = ref(0);
const numero2 = ref(0);

const total = computed(() => {
  // SIEMPRE REGRESAR UN VALOR
  const sumaTotal = numero1.value + numero2.value;
  return sumaTotal;
});

const incrementNumero1 = () => numero1.value = numero1.value + 1;
const decrementNumero1 = () => numero1.value = numero1.value - 1;

const incrementNumero2 = () => numero2.value = numero2.value + 1;
const decrementNumero2 = () => numero2.value = numero2.value - 1;

// const sum = () => total.value = numero1.value + numero2.value;
const searchValue = ref('');

const mascotas = reactive(["Gato", "Loro", "Perro", "Cerdito", "Hipotamo", "Jirafa", "Oso"]);

const totalDeMascotas = computed(() => {
  return mascotas.length;
});

const mascotasFiltradas = computed(() => {
  return mascotas.filter((mascota) => mascota.includes(searchValue.value));
});
</script>

<template>
  <div class="number-container">
    <Button @click="incrementNumero1">
      Incrementar
    </Button>

    <div>
      {{ numero1 }}
    </div>

    <Button @click="decrementNumero1">
      Decrementar
    </Button>
  </div>

  <hr>

  <div class="number-container">
    <Button @click="incrementNumero2">
      Incrementar
    </Button>

    <div>
      {{ numero2 }}
    </div>

    <Button @click="decrementNumero2">
      Decrementar
    </Button>
  </div>

  <hr>

  <h2>Resultado: {{ total }}</h2>

  <hr>

  <h1>
    Mascotas
  </h1>

  <h3>
    Tienes en total: {{ totalDeMascotas }}
  </h3>

  <InputText
      type="text"
      placeholder="Escribe para buscar"
      v-model="searchValue"
  />

  <ul>
    <li v-for="mascota in mascotasFiltradas">
      {{ mascota }}
    </li>
  </ul>
</template>

<style scoped>
.number-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 18px;
}
</style>