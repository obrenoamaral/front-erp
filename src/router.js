// src/router.js
import { createRouter, createWebHistory } from 'vue-router';

// Importar as páginas que serão carregadas dentro do layout
import DashboardPage from './components/DashboardPage.vue';
import UsersPage from './components/users/UserPage.vue';
import InvoicePage from "@/components/invoices/InvoicePage.vue";


// Definir as rotas
const routes = [
    { path: '/', component: DashboardPage },
    { path: '/users', component: UsersPage },
    { path: '/invoices', component: InvoicePage },
];

// Criar a instância do router
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
