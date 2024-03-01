<script setup>
import {ref} from "vue";

const isVisible = ref(true);

const toggle = () => isVisible.value = !isVisible.value;
</script>

<template>
  <h1>Animaciones y transiciones</h1>

  <Transition>
    <div v-if="isVisible">
      <h3>ELEMENTO</h3>
    </div>
  </Transition>

  <Transition name="with-transition">
    <div v-if="isVisible" class="bg">
      <h3>ELEMENTO</h3>
    </div>
  </Transition>

  <button @click="toggle">
    Cambiar visibilidad del elemento
  </button>
</template>

<style scoped>
.v-enter-active, .v-leave-active {
  transition: opacity 10s;
}

.v-enter-from, .v-leave-to {
  opacity: 0;
}

.with-transition-leave-active {
  animation: width-animation-out 3s
}

.with-transition-enter-active {
  animation: width-animation-in 3s;
}

@keyframes width-animation-out {
  from {
    width: 100%;
  }

  to {
    width: 0;
  }
}

@keyframes width-animation-in {
  from {
    width: 0;
  }

  to {
    width: 100%;
  }
}

.bg {
  background: red;
}
</style>