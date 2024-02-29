<script setup>
// import Card from "./components/Card.vue";
import CardTitle from "./components/CardTitle.vue";
import CardText from "./components/CardText.vue";
import CardSubTitle from "./components/CardSubTitle.vue";
import CardLink from "./components/CardLink.vue";
import Toolbar from 'primevue/toolbar';
import Button from 'primevue/button';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';


// import Calendar from 'primevue/calendar';
// import InputText from 'primevue/inputtext';
// import Button from 'primevue/button';

// import DataTable from 'primevue/datatable';
// import Column from 'primevue/column';
import Card from 'primevue/card';


import {reactive, ref} from "vue";
import ButtonChris from "./components/ButtonChris.vue";

const date = ref("");
const inputText = ref("");

const products = reactive([
  {
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
  },
  {
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
  },
  {
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
  },
  {
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
  },
  {
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
  },
  {
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
  },
  {
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
  },
  {
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
  },
  {
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
  }
]);

const cryptoNews = reactive([
  {
    titulo: "Bitcoin Alcanza un Nuevo Máximo Histórico",
    descripcion: "En un movimiento alcista impresionante, el precio de Bitcoin superó los $60,000 USD, marcando un nuevo récord en la historia de la criptomoneda.",
    imagen: "https://braindex.academy/app/uploads/2022/05/Bitcoin-y-sus-ciclos-Braindex-Academy.jpg"
  },
  {
    titulo: "Ethereum Lanza la Actualización London",
    descripcion: "La red Ethereum implementó la tan esperada actualización London, que trajo consigo mejoras en tarifas y cambios en el modelo de tarifas para los usuarios.",
    imagen: "https://imageio.forbes.com/specials-images/imageserve/63e5179bc38273483b361abf/Ethereum-coin-token-with-candlestick-chart-background--Digital-currency-/0x0.jpg?format=jpg&width=960"
  },
  {
    titulo: "NFTs Continúan Ganando Popularidad",
    descripcion: "Los NFTs (Tokens No Fungibles) están en auge, con artistas y celebridades participando activamente en el mercado. Se vendió un NFT de arte digital por millones de dólares.",
    imagen: "https://news.america-digital.com/wp-content/uploads/2022/11/Bored_Ape_NFT_sells_for_115_is_the_NFT_hype_coming_to_a_close.jpg"
  },
  {
    titulo: "Banco Central Anuncia Investigación sobre CBDC",
    descripcion: "El banco central de un país importante anunció que está explorando la posibilidad de lanzar una moneda digital respaldada por el gobierno (CBDC) para modernizar el sistema financiero.",
    imagen: "https://media.ambito.com/p/faf527abd9d958bb4599b712e98a05de/adjuntos/239/imagenes/041/024/0041024295/1200x675/smart/cbdcjpg.jpg"
  },
  {
    titulo: "Ransomware Exige Pago en Bitcoin",
    descripcion: "Un ataque de ransomware afectó a una empresa importante, exigiendo el pago de un rescate en Bitcoin. Este incidente destaca los riesgos de seguridad asociados con las criptomonedas.",
    imagen: "https://image.cnbcfm.com/api/v1/image/106895238-1623342422134-GettyImages-1017702832.jpg?v=1623342455&w=1600&h=900"
  }
])

const items = ref([
  {
    label: 'Update',
    icon: 'pi pi-refresh'
  },
  {
    label: 'Delete',
    icon: 'pi pi-times'
  }
])
</script>

<template>
  <Toolbar>
    <template #start>
      <Button icon="pi pi-plus" class="mr-2" severity="secondary" />
      <Button icon="pi pi-print" class="mr-2" severity="secondary" />
      <Button icon="pi pi-upload" severity="secondary" />
    </template>

    <template #center>
      <IconField iconPosition="left">
        <InputIcon>
          <i class="pi pi-search" />
        </InputIcon>
        <InputText placeholder="Search" />
      </IconField>
    </template>

    <template #end> <SplitButton label="Save" :model="items"></SplitButton></template>
  </Toolbar>

  <div class="container">
    <div class="row">
      <div class="col-sm" v-for="cryptoNew in cryptoNews">
        <Card
            style="width: 25rem; overflow: hidden"
        >
          <template #title>
            {{ cryptoNew.titulo }}
          </template>

          <template #content>
            <p class="m-0">
              {{ cryptoNew.descripcion }}
            </p>
          </template>

          <template #header>
            <img
                style="width: 25rem;"
                :alt="cryptoNew.titulo"
                :src="cryptoNew.imagen"
            />
          </template>
        </Card>
      </div>
    </div>
  </div>
  <!--
  <card></card>
  <card />
  <Card />
  -->

  <!--
  <v-app>
    <v-app-bar :elevation="2" color="red">
      <template v-slot:prepend>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
      </template>

      <v-app-bar-title>Crypto app</v-app-bar-title>
    </v-app-bar>

    <v-container class="mt-10">
      <v-card
          class="mx-auto my-8"
          max-width="344"
          elevation="16"
          color="red"
      >
        <v-card-item>
          <v-card-title>
            Card title
          </v-card-title>
          <v-card-subtitle>
            Card subtitle secondary text
          </v-card-subtitle>
        </v-card-item>

        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </v-card-text>
      </v-card>


      <v-text-field label="Label" variant="outlined"></v-text-field>
    </v-container>
  </v-app>-->

  <!--
  <Toolbar />
  -->
  <div class="container mx-auto">
    <!---<Card>
      <CardTitle>
        Lista de compras
      </CardTitle>

      <card-text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam minima pariatur quae sit!
        Accusantium alias cupiditate delectus eius eligendi et fuga id, iste iure obcaecati, quaerat
        sunt veritatis vitae voluptatibus!
      </card-text>

      <CardLink link="https://www.amazom.com.mx">
        Comprar
      </CardLink>
    </Card>

    <Card>
      <CardTitle>
        Card title
      </CardTitle>

      <CardSubTitle>
        Subtitle
      </CardSubTitle>

      <card-text>
        Some quick example text to build on the card title
        and make up the bulk of the card's content.
      </card-text>

      <CardLink link="https://www.google.com">
        Card link
      </CardLink>

      <CardLink link="https:///www.tesla.com">
        Another link
      </CardLink>
    </Card>-->
    <!--
    <Calendar v-model="date" selectionMode="range"/>

    <InputText type="text" v-model="inputText" />

    <Button label="Primary" />
    <Button label="Secondary" severity="secondary" />
    <Button label="Success" severity="success" />
    <Button label="Info" severity="info" />
    <Button label="Warning" severity="warning" />
    <Button label="Help" severity="help" />
    <Button label="Danger" severity="danger" />
    <Button label="Contrast" severity="contrast" />

    <DataTable
        :value="products"
        showGridlines
        tableStyle="min-width: 50rem"
        paginator
        :rows="2"
        :rowsPerPageOptions="[2, 4, 8, 10]"
    >
      <Column field="code" header="Code" />
      <Column field="name" header="Name" />
      <Column field="category" header="Category" />
      <Column field="quantity" header="Quantity" />
    </DataTable>

    <ButtonChris label="Este es un boton color salmon" />
    -->
  </div>
</template>

<style scoped>

</style>