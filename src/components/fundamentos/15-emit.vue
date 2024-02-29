<script setup>
import ButtonWithEvent from "./components/ButtonWithEvent.vue";

const seHizoClick = () => {
  console.log('Se hizo click');
}

const seHizoElEventoDeChris = () => {
  console.log('Paso el evento de chris');
}
</script>

<template>
  <ButtonWithEvent
      @click="seHizoClick"
      @el-evento-de-chris="seHizoElEventoDeChris"
  >
    Presioname
  </ButtonWithEvent>
</template>

<style scoped>

</style>