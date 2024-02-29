import { createRouter, createWebHistory } from 'vue-router';
import Index from "./pages/Index.vue";
import About from "./pages/About.vue";
import Contact from "./pages/Contact.vue";
import Shop from "./pages/Shop.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Index,
        },
        {
            path: '/about',
            component: About
        },
        {
            path: '/contact',
            component: Contact
        },
        {
            path: '/shop',
            component: Shop
        }
    ],
});

export default router;