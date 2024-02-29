<script setup>
const fruits = [
  "Platano",
  "Manzana",
  "Pera",
  "Sandia",
  "Melon",
  "Uva",
];

const animals = [
  {
    name: 'Perro',
    status: 'Libre',
    age: 2
  },
  {
    name: 'Gato',
    status: 'Libre',
    age: 3,
  },
  {
    name: 'Mono',
    status: 'Capturado',
    age: 12,
  },
];

const books = [
  {
    title: 'Libro 1',
    ranking: 10,
    categories: ["Fantasia", "Terror", "Aventura"]
  },
  {
    title: 'Libro 2',
    ranking: 8,
    categories: ["Romance", "Aventura", "Felicidad"]
  },
  {
    title: 'Libro 3',
    ranking: 7,
    categories: ["Finanzas", "Inversiones"]
  },
];

const printBookName = (bookName) => {
  console.log(bookName);
}
</script>

<template>
  <ul>
    <li v-for="fruit in fruits">
      {{ fruit }}
    </li>
  </ul>

  <table border="1">
    <thead>
    <tr>
      <th>Nombre</th>
      <th>Estatus</th>
      <th>Edad</th>
    </tr>
    </thead>

    <tbody>
    <tr v-for="animal in animals">
      <td>
        {{ animal.name }}
      </td>

      <td>
        {{ animal.status }}
      </td>

      <td>
        {{ animal.age }}
      </td>
    </tr>
    </tbody>
  </table>

  <div v-for="book in books">
    <h2 @click="printBookName(book.title)">
      {{ book.title }}
    </h2>

    <p>Ranking: {{ book.ranking }} </p>

    <ul>
      <li v-for="category in book.categories">
        {{ category }}
      </li>
    </ul>

    <hr>
  </div>
</template>

<style scoped>

</style>
