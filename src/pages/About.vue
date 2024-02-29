<script setup>
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import {reactive} from "vue";
import shoppingCartStore from "@/store/shoppingCartStore.js";

const product = reactive({
  id: '',
  name: '',
  price: 0,
});

const { addNewProduct } = shoppingCartStore();

const submitProduct = () => {
  addNewProduct({
    id: Number(product.id),
    name: product.name,
    price: Number(product.price),
  });
}
</script>

<template>
  <h1>
    About page
  </h1>

  <h4>Agregar producto al carrito</h4>

  <InputText
      placeholder="id"
      v-model="product.id"
  />

  <InputText
      placeholder="Nombre"
      v-model="product.name"
  />

  <InputText
      placeholder="Precio $$$"
      v-model="product.price"
  />

  <pre>
    {{ product }}
  </pre>

  <Button label="Guardar producto" @click="submitProduct" />

  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum eligendi, provident. Asperiores culpa debitis,
    deleniti dicta distinctio dolor, doloribus eos, impedit itaque iusto libero
    officia placeat quod saepe sed similique.
  </p>


  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum eligendi, provident. Asperiores culpa debitis,
    deleniti dicta distinctio dolor, doloribus eos, impedit itaque iusto libero
    officia placeat quod saepe sed similique.
  </p>


  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum eligendi, provident. Asperiores culpa debitis,
    deleniti dicta distinctio dolor, doloribus eos, impedit itaque iusto libero
    officia placeat quod saepe sed similique.
  </p>


  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum eligendi, provident. Asperiores culpa debitis,
    deleniti dicta distinctio dolor, doloribus eos, impedit itaque iusto libero
    officia placeat quod saepe sed similique.
  </p>
</template>

<style scoped>

</style>