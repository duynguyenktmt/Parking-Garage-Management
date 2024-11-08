// In router/index.js
// a global navigation guard if want to enforce token checks across the entire application.
import { createRouter, createWebHistory } from 'vue-router';
import { isTokenExpired } from '@/http/utils';
import Home from '@/views/Home.vue';
import Login from '@/views/Login.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/login', name: 'Login', component: Login },
    // other routes...
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

// Global navigation guard
router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('token');
    if (isTokenExpired(token) && to.name !== 'Login') {
        // Redirect to login if the token is expired and the user is not already on the login page
        next({ name: 'Login' });
    } else {
        next(); // Proceed to the route
    }
});

export default router;