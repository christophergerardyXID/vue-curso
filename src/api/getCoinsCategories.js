import api from "./api.js";

export async function getCoinsCategories() {
    const request = await api.get("/coins/categories");
    return request.data;
}
