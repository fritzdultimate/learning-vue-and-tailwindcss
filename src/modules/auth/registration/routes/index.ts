const routes = [
    {
        path: '/auth/register',
        name: 'RegistrationView',
        component: () => import('../views/RegistrationView.vue'),
    },

    {
        path: '/auth/register/setups/verify',
        name: 'VerifyAccountView',
        component: () => import('../views/VerifyAccountView.vue'),
    },
];

export default routes;