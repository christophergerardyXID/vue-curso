<script setup>
import {reactive, ref} from "vue";

const width = ref("0px");
const height = ref("0px");
const background = ref("red");

const styleDiv = reactive({
  width: width,
  height: height,
  background: background,
});

const isTaskCompleted = ref(false);

const classDiv = reactive({
  'activo': isTaskCompleted,
  'activo-2': true,
});

const todoText = ref('');

const todos = reactive([]);

const addTodo = () => {
  todos.push({
    text: todoText.value,
    status: false,
  });

  todoText.value = '';
}
</script>

<template>
  <input type="text" v-model="width" placeholder="Width">

  <br>

  <input type="text" v-model="height" placeholder="Height">

  <br>

  <input type="text" v-model="background" placeholder="Background">

  <div :style="styleDiv"></div>

  <label>
    Has completado la tarea?
    <input type="checkbox" v-model="isTaskCompleted">
  </label>

  <h1>App de tareas</h1>

  <input
      type="text"
      placeholder="Describe tu tarea"
      v-model="todoText"
  >

  <button @click="addTodo">
    Agregar
  </button>

  <div v-for="todo in todos" class="container">
    <h3 :class="{ 'task-completed': todo.status }">
      {{ todo.text }}
    </h3>

    <input
        type="checkbox"
        v-model="todo.status"
    >
  </div>
</template>

<style>
.activo {
  background: aquamarine;
  color: white;
  font-size: 19px;
}

.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: solid 1px gray;
  padding: 0 16px;
}

.task-completed {
  text-decoration: line-through;
}
</style>