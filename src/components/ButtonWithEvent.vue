<script setup>
import {ref, watch} from "vue";
import Button from 'primevue/button';

const counter = ref(0);
const emit = defineEmits(["click", "el-evento-de-chris"]);

const emitirClick = () => {
  counter.value = counter.value + 1;
  emit("click");
}

watch(counter, () => {
  if (counter.value === 3) {
    emit("el-evento-de-chris");
    counter.value = 0;
  }
})
</script>

<template>
  <Button @click="emitirClick">
    <slot></slot>
  </Button>
</template>

<style scoped>

</style>