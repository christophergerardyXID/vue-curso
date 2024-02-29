<script setup>
import {reactive} from "vue";

const pizzas = reactive([]);

const pizzaData = reactive({
  name: '',
  available: false,
  ingredients: [],
});

const addPizza = () => {
  pizzas.push({ ...pizzaData });
  emptyPizza();
}

const addIngredient = () => {
  pizzaData.ingredients.push('');
}

const emptyPizza = () => {
  pizzaData.name = '';
  pizzaData.available = false;
  pizzaData.ingredients = [];
}

const orderPizza = (pizzaName) => {
  alert(`Has ordenado la pizza: ${pizzaName}`);
}
</script>

<template>
  <h1>Pizzeria</h1>

  <input
      type="text"
      placeholder="Nombre de la pizza"
      v-model="pizzaData.name"
  />

  <br>

  <label>
    Disponibilidad

    <input
        type="checkbox"
        v-model="pizzaData.available"
    >
  </label>

  <h2>
    Ingredientes de la pizza
  </h2>

  <input
      v-for="(_, index) in pizzaData.ingredients"
      type="text"
      v-model="pizzaData.ingredients[index]"
  >

  <button @click="addIngredient">
    Agregar ingrediente a la pizza
  </button>

  <button @click="addPizza">
    Crear pizza
  </button>

  <hr>

  <h1>Menu</h1>

  <div v-for="pizza in pizzas">
    <h2>
      {{ pizza.name }}
    </h2>

    <h3>
      Ingredientes en esta pizza
    </h3>

    <ul>
      <li v-for="ingredient in pizza.ingredients">
        {{ ingredient }}
      </li>
    </ul>

    <button v-if="pizza.available" @click="orderPizza(pizza.name)">
      Ordena ya
    </button>

    <hr>
  </div>
</template>

