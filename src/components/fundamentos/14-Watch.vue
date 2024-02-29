<script setup>
import {computed, reactive, ref, watch} from "vue";
import InputText from 'primevue/inputtext';
import Card from 'primevue/card';
import Checkbox from 'primevue/checkbox';

const age = ref(10);

/*
watch(age, (value, oldValue) => {
  console.log({ value, oldValue })
});
 */

watch(age, () => {
  console.log(age.value);

  if (age.value > 18) {
    alert('Felicidades ya eres mayor de edad');
  }

  if (age.value < 10) {
    alert('Felicidades eres un niñ@');
  }
});

const tasks = reactive([
  {
    title: 'Pasear al perro',
    completed: false,
  },
  {
    title: 'Tomar 2l de agua',
    completed: false,
  },
  {
    title: 'Hacer ejercisio',
    completed: false,
  },
  {
    title: 'Descansar',
    completed: false,
  },
]);

const isTasksCompleted = computed(() => {
  return tasks.every((task) => task.completed)
});

watch(isTasksCompleted, () => {
  console.log('Ejecutando...')

  if (isTasksCompleted) {
    alert('Felicidades por terminar tus tareas :)');
  }
});
</script>

<template>
  <InputText
      type="number"
      v-model="age"
  />

  <h3>
    Tu edad actual es: {{ age }}
  </h3>

  <hr>

  <div class="container">
    <h1>Tareas</h1>

    <Card v-for="task in tasks" class="margin-abajo">
      <template #content>
        <div class="task-container">
          <h4>{{ task.title }}</h4>
          <Checkbox v-model="task.completed" />
        </div>
      </template>
    </Card>
  </div>
</template>

<style scoped>
.task-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.margin-abajo {
  margin-bottom: 18px;
}
</style>