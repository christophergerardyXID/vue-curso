<script setup>
import Button from 'primevue/button';
const props = defineProps(["label"])
</script>

<template>
  <Button :label="props.label" />
</template>

<style scoped>
.p-button {

}
</style>