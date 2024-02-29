<script setup>
import SuperToolbar from "../components/SuperToolbar.vue";
import SuperFooter from "../components/SuperFooter.vue";
import ShoppingCardItem from "../components/ShoppingCartItem.vue";
import ShoppingCartStore from "../store/shoppingCartStore.js";

const { productsInShoppingCart, totalToPay } = ShoppingCartStore();
</script>

<template>
  <!--TOOLBAR-->
  <SuperToolbar></SuperToolbar>

  <!--CONTENIDO-->
  <div class="container">
    <div class="row">
      <div class="col-6">
        <slot></slot>
      </div>

      <div class="col-6">
        <h3>Carrito de compras</h3>

        <ShoppingCardItem
            v-for="product in productsInShoppingCart"
            :price="product.price"
            :name="product.name"
        />

        <h2>Total a pagar ${{ totalToPay }}</h2>
      </div>
    </div>
  </div>

  <!--FOOTER-->

  <SuperFooter></SuperFooter>
</template>

<style scoped>

</style>