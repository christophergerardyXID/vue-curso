<script setup>
import {computed, reactive, ref} from "vue";
import ShoppingCartItem from "../components/ShoppingCartItem.vue";
import InputText from 'primevue/inputtext';

const productsInShoppingCart = reactive([
  {
    id: 1,
    name: 'Patineta',
    price: 200,
  },
  {
    id: 2,
    name: 'Iphone 12',
    price: 400,
  },
  {
    id: 3,
    name: 'TV Samsung 5k 120fps',
    price: 500,
  },
  {
    id: 4,
    name: 'Xbox',
    price: 400,
  },
  {
    id: 5,
    name: 'Libro sobre programación',
    price: 25,
  }
]);
const searchCriteria = ref("");

const productsFilter = computed(() => {
  // RETORNAR UN VALOR
  return productsInShoppingCart.filter((product) => {
    return product.name.toLowerCase().includes(searchCriteria.value.toLowerCase());
  })
});

const totalToPay = computed(() => {
  let total = 0;

  for (const product of productsInShoppingCart) {
    total += product.price;
  }

  return total;
});
</script>

<template>
  <h1>Carrito de compras</h1>

  <InputText
      v-model="searchCriteria"
  />

  <ShoppingCartItem
      v-for="shoppingCartItem in productsFilter"
      :name="shoppingCartItem.name"
      :price="shoppingCartItem.price"
  />

  <h3>Total a pagar ${{ totalToPay }}</h3>
</template>

<style scoped>

</style>