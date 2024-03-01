<script setup>
import Toolbar from 'primevue/toolbar';
import {reactive} from "vue";

const links = reactive([
  {
    text: 'Home',
    path: '/',
  },
  {
    text: 'Contacto',
    path: '/contact',
  },
  {
    text: 'Acerca de',
    path: '/about',
  },
  {
    text: 'Carrito',
    path: '/shop',
  },
  {
    text: 'Categorias de coins',
    path: '/coins',
  },
  {
    text: 'Animaciones y transiciones',
    path: '/animations'
  }
])
</script>

<template>
  <Toolbar>
    <template #start>
      <router-link to="/" class="main-app">
        Mi primera app
      </router-link>
    </template>

    <template #end>
      <div class="link-container">
        <router-link
            class="link-item"
            v-for="link in links"
            :to="link.path"
        >
          {{ link.text }}
        </router-link>
      </div>
    </template>
  </Toolbar>
</template>

<style scoped>
.main-app {
  color: #e3496f;
  font-size: 18px;
  text-decoration: none;
}

.link-container {
  display: flex;
  gap: 16px;
}

.link-item {
  color: #000000;
  text-decoration: none;
}
</style>