<script setup>
const props = defineProps(["link"]);
</script>

<template>
  <a :href="props.link" class="text-blue pr-2">
    <slot></slot>
  </a>
</template>

<style scoped>

</style>