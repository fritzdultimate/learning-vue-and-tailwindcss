const routes = [
    {
        path: '/app/space/user/dashboard',
        name: 'UserDashboardView',
        component: () => import('../views/UserDashboardView.vue'),
        meta: {
            // layout: 'AppLayoutHome'
        }
    },

    {
        path: '/app/space/user/exchange',
        name: 'ExchangeView',
        component: () => import('../views/ExchangeView.vue'),
        meta: {
            // layout: 'AppLayoutHome'
        }
    },

    {
        path: '/app/space/user/wallet',
        name: 'WalletView',
        component: () => import('../views/WalletView.vue'),
        meta: {
            // layout: 'AppLayoutHome'
        }
    },

    {
        path: '/app/space/user/send',
        name: 'SendView',
        component: () => import('../views/SendView.vue'),
        meta: {
            // layout: 'AppLayoutHome'
        }
    },

    {
        path: '/app/space/user/send/preview',
        name: 'SendPreviewView',
        component: () => import('../views/SendPreviewView.vue'),
        meta: {
            // layout: 'AppLayoutHome'
        }
    },

    {
        path: '/app/space/user/receive',
        name: 'ReceiveView',
        component: () => import('../views/ReceiveView.vue'),
        meta: {
            // layout: 'AppLayoutHome'
        }
    },

    {
        path: '/app/space/user/receive/copy',
        name: 'ReceivedPageView',
        component: () => import('../views/ReceivedPageView.vue'),
        meta: {
            // layout: 'AppLayoutHome'
        }
    },
];

export default routes;