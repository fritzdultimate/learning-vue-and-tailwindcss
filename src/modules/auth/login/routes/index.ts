const routes = [
    {
        path: '/auth/login',
        name: 'LoginView',
        meta : {
            dashboard : 'user',
        },
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

    {
        path: '/auth/login/accounts',
        name: 'AccountsListView',
        component: () => import('../views/AccountsListView.vue')
    }
];

export default routes;