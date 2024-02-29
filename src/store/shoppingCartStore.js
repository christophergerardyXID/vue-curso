import { defineStore } from "pinia";
import {computed, reactive, ref} from "vue";

const shoppingCartStore = defineStore("shoppingCart", () => {
    const searchCriteria = ref("");

    const productsInShoppingCart = reactive([
        {
            id: 1,
            name: 'Patineta',
            price: 200,
        },
        {
            id: 2,
            name: 'Iphone 12',
            price: 400,
        },
        {
            id: 3,
            name: 'TV Samsung 5k 120fps',
            price: 500,
        },
        {
            id: 4,
            name: 'Xbox',
            price: 400,
        },
        {
            id: 5,
            name: 'Libro sobre programación',
            price: 25,
        }
    ]);

    const productsFilter = computed(() => {
        return productsInShoppingCart.filter((product) => {
            return product.name.toLowerCase().includes(searchCriteria.value.toLowerCase());
        })
    });

    const totalToPay = computed(() => {
        let total = 0;

        for (const product of productsInShoppingCart) {
            total += product.price;
        }

        return total;
    });

    const addNewProduct = (product) => {
        productsInShoppingCart.push(product);
    }

    return {
        totalToPay,
        searchCriteria,
        productsFilter,
        productsInShoppingCart,
        addNewProduct,
    }
});

export default shoppingCartStore;