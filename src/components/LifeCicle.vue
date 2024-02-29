<script setup>
import {onUnmounted, onBeforeUnmount, onMounted} from "vue";

onMounted(() => {
  console.log('Componente lifeclicle montando con exito');
})

onBeforeUnmount(() => {
  console.log('On before unmount');
})

onUnmounted(() => {
  console.log('On unmounted');
})
</script>

<template>
  <h1>
    Unmounted
  </h1>
</template>

<style scoped>

</style>