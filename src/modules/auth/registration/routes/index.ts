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
    {
        path: '/auth/register/setups/survey',
        name: 'RegistrationSurveyView',
        component: () => import('../views/RegistrationSurveyView.vue'),
    },
    {
        path: '/auth/register/setups/ready',
        name: 'RegistrationGettingStarted',
        component: () => import('../views/RegistrationGettingStarted.vue'),
    },
];

export default routes;