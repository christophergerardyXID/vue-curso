<script setup>
function hacerClick () {
  // CODE
  console.log('Me hiciste click');
}

const hacerClick = () => {
  console.log('Me hiciste click');
}
</script>

<template>
  <!--NO EXISTE DIFERENCIA-->
  <button id="btn" @click="hacerClick">
    Click me
  </button>
</template>

<style scoped>

</style>
