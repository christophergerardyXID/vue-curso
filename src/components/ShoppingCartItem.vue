<script setup>
import Card from "primevue/card";

const props = defineProps(["name", "price"])
</script>

<template>
  <Card class="margin-b">
    <template #content>
      <div class="shopping-cart-item">
        <h3>{{ props.name }}</h3>
        <span>{{ props.price }}</span>
      </div>
    </template>
  </Card>
</template>

<style scoped>
.shopping-cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.margin-b {
  margin-bottom: 18px;
}
</style>