const routes = [
    {
        path: '/auth/login',
        name: 'LoginView',
        component: () => import('../views/LoginView.vue'),
    },

    {
        path: '/auth/login/recover',
        name: 'ForgotPasswordView',
        component: () => import('../views/ForgotPasswordView.vue'),
    },
];

export default routes;