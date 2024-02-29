<script setup>
const age = 17;
</script>

<template>
  <h1 v-if="age >= 18">
    Eres mayor de 18 años
  </h1>

  <h1 v-show="age >= 18">
    Eres mayor de 18 años (v-show)
  </h1>
</template>

<style scoped>

</style>
