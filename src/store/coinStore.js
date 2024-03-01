import {defineStore} from "pinia";
import {getCoinsCategories} from "@/api/getCoinsCategories.js";

const coinStore = defineStore('coinStore', () => {
    const getCoins = async () => {
        return getCoinsCategories();
    }

    return {
        getCoins,
    }
});

export default coinStore;