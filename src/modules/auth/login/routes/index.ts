const routes = [
    {
        path: '/login',
        name: 'LoginView',
        component: () => import('../views/LoginView.vue'),
      },
];

export default routes;