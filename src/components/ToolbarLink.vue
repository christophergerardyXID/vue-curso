<script setup>
const props = defineProps(["to"]);
</script>

<template>
  <a :href="props.to" class="text-white">
    <slot></slot>
  </a>
</template>

<style scoped>

</style>