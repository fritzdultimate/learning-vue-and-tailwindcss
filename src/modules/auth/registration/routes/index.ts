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
    // this route is temporary
    {
        path: '/auth/register/setups/survey',
        name: 'RegistrationSurvey',
        component: () => import('../components/RegistrationSurvey.vue'),
    },
];

export default routes;