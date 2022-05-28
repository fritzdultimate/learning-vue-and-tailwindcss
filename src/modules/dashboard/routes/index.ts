const routes = [
    {
        path: '/app/space/user/dashboard',
        name: 'UserDashboardView',
        component: () => import('../views/UserDashboardView.vue'),
        meta: {
            // layout: 'AppLayoutHome'
        }
    },
];

export default routes;