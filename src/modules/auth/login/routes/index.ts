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

    {
        path: '/auth/login/recover/password/change',
        name: 'ChangePasswordView',
        component: () => import('../views/ChangePasswordView.vue'),
    },
];

export default routes;