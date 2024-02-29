<script setup>
const user = {
  nombre: 'Christopher Gerardy',
  role: 'Admin',
}
</script>

<template>
  <button v-if="user.role === 'Admin'">
    Crear o eliminar BD
  </button>

  <button v-else-if="user.role === 'Editor'">
    Editar BD
  </button>

  <button v-else>
    Leer BD
  </button>
</template>

<style scoped>

</style>
