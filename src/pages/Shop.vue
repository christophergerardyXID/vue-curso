<script setup>
import ShoppingCartItem from "../components/ShoppingCartItem.vue";
import InputText from 'primevue/inputtext';
import ShoppingCartStore from "../store/shoppingCartStore.js";
import { toRefs } from "vue";

const {
  productsFilter,
  searchCriteria,
  totalToPay,
} = toRefs(ShoppingCartStore());
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
