<script setup>
import {reactive, ref} from "vue";

const pokemones = reactive([
  {
    name: "bulbasaur",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
  },
  {
    name: "charmander",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
  },
  {
    name: "squirtle",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
  }
]);

const link = ref("https://www.google.com");

const iraPagina = (enlace) => {
  link.value = enlace;
};

const buttonLinks = reactive([
  {
    text: 'Ir a yahoo',
    link: 'https://www.yahoo.com',
  },
  {
    text: 'Ir a bing',
    link: 'https://www.bing.com'
  },
  {
    text: 'Ir a tesla',
    link: 'https://www.tesla.com',
  },
  {
    text: 'Regresar a google',
    link: 'https://www.google.com'
  }
]);
</script>

<template>
  <div v-for="pokemon in pokemones">
    <h1>
      {{ pokemon.name }}
    </h1>

    <!--<img v-bind:src="pokemon.image">-->
    <img :src="pokemon.image" :alt="pokemon.name">
  </div>

  <hr>

  <a :href="link">
    Click
  </a>

  <button v-for="enlace in buttonLinks" @click="iraPagina(enlace.link)">
    {{ enlace.text }}
  </button>
</template>

<style scoped>

</style>
