<script setup>
import {onBeforeMount, onMounted, onBeforeUpdate, onUpdated, ref} from "vue";
import LifeCicle from "./components/LifeCicle.vue";

onMounted(() => {
  console.log('On mounted');
});

onBeforeMount(() => {
  console.log('On before mount');
});

onBeforeUpdate(() => {
  console.log('On before update');
})

onUpdated(() => {
  console.log('On update')
});

const counter = ref(0)
const increment = () => counter.value = counter.value + 1;

const isVisible = ref(true);

const toggle = () => isVisible.value = !isVisible.value;
</script>

<template>
  <h1>Ganchos del ciclo de vida de Vue</h1>
  <button @click="increment">Incrementar contador</button>
  <h3>{{ counter }}</h3>

  <hr>

  <button @click="toggle">
    Ocultar o remover elemento del dom
  </button>

  <LifeCicle v-if="isVisible" />
</template>

<style scoped>

</style>