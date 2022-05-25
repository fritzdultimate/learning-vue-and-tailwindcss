const routes = [
    {
        path: '/',
        name: 'HomeView',
        component: () => import('../views/HomeView.vue'),
        meta: {
          layout: 'AppLayoutHome'
        }
    },
    {
        path: '/about',
        name: 'AboutUsView',
        component: () => import('../views/AboutUsView.vue'),
        meta: {
          layout: 'AppLayoutHome'
        }
    },
    {
        path: '/support/contact-us',
        name: 'ContactUsView',
        component: () => import('../views/ContactUsView.vue'),
        meta: {
          layout: 'AppLayoutHome'
        }
    },
];

export default routes;