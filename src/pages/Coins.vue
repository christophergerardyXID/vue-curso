<script setup>
import {onMounted, reactive} from "vue";
import coinStore from "../store/coinStore.js";

const { getCoins } = coinStore();

let coinsCategories = reactive([]);

onMounted(async () => {
  const result = await getCoins();
  coinsCategories.push(...result);
});
</script>

<template>
  <h1>Categorias de cryptomonedas</h1>

  <div v-if="coinsCategories.length > 0">
    <div v-for="category in coinsCategories">
      {{ category.name }}

      {{ category.content }}

      <br>
    </div>
  </div>

</template>

<style scoped>

</style>