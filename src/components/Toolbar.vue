<script setup>
import ToolbarLink from "../components/ToolbarLink.vue"
import {reactive} from "vue";

const links = reactive([
  {
    text: 'Home',
    path: '/'
  },
  {
    text: 'Monedas populares',
    path: '/coins',
  },
  {
    text: 'Trending',
    path: '/trending'
  },
  {
    text: 'Acerca de',
    path: '/about'
  }
]);
</script>

<template>
  <nav class="w-full py-4 bg-purple">
    <div class="container mx-auto flex justify-between">
      <a href="" class="text-white font-semibold">
        Crypto app
      </a>

      <div class="flex gap-8">
        <!--<ToolbarLink to="/">
          Home
        </ToolbarLink>

        <ToolbarLink to="/coins">
          Monedas populares
        </ToolbarLink>

        <ToolbarLink to="/about">
          Acerca de
        </ToolbarLink>-->

        <ToolbarLink v-for="link in links" :to="link.path">
          {{ link.text }}
        </ToolbarLink>
      </div>
    </div>
  </nav>
</template>
