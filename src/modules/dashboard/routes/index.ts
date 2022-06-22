const routes = [
    {
        path: '/app/space/user/dashboard',
        name: 'UserDashboardView',
        component: () => import('../views/UserDashboardView.vue'),
        meta: {
            auth : true,
            dashboard : 'user',
            // layout: 'AppLayoutHome'
        }
    },

    {
        path: '/app/space/user/exchange',
        name: 'ExchangeView',
        component: () => import('../views/ExchangeView.vue'),
        meta: {
            auth : true,
            dashboard : 'user',
            // layout: 'AppLayoutHome'
        }
    },

    {
        path: '/app/space/user/wallet',
        name: 'WalletView',
        component: () => import('../views/WalletView.vue'),
        meta: {
            auth : true,
            dashboard : 'user',
            // layout: 'AppLayoutHome'
        }
    },
    {
        path: '/app/space/user/wallet/preview',
        name: 'WalletPreviewView',
        component: () => import('../views/WalletPreviewView.vue'),
        meta: {
            auth : true,
            dashboard : 'user',
            // layout: 'AppLayoutHome'
        }
    },

    {
        path: '/app/space/user/send',
        name: 'SendView',
        component: () => import('../views/SendView.vue'),
        meta: {
            auth : true,
            dashboard : 'user',
            // layout: 'AppLayoutHome'
        }
    },

    {
        path: '/app/space/user/send/preview',
        name: 'SendPreviewView',
        component: () => import('../views/SendPreviewView.vue'),
        meta: {
            auth : true,
            dashboard : 'user',
            // layout: 'AppLayoutHome'
        }
    },

    {
        path: '/app/space/user/receive',
        name: 'ReceiveView',
        component: () => import('../views/ReceiveView.vue'),
        meta: {
            auth : true,
            dashboard : 'user',
            // layout: 'AppLayoutHome'
        }
    },

    {
        path: '/app/space/user/receive/copy',
        name: 'ReceivedPageView',
        component: () => import('../views/ReceivedPageView.vue'),
        meta: {
            auth : true,
            dashboard : 'user',
            // layout: 'AppLayoutHome'
        }
    },

    {
        path: '/app/space/user/receive/details',
        name: 'TransactionDescription',
        component: () => import('../views/TransactionDescription.vue'),
        meta: {
            auth : true,
            dashboard : 'user',
            // layout: 'AppLayoutHome'
        }
    },
    {
        path: '/app/space/user/buy',
        name: 'BuyView',
        component: () => import('../views/BuyView.vue'),
        meta: {
            auth : true,
            dashboard : 'user',
            // layout: 'AppLayoutHome'
        }
    },
    {
        path: '/app/space/user/sell',
        name: 'SellView',
        component: () => import('../views/SellView.vue'),
        meta: {
            auth : true,
            dashboard : 'user',
            // layout: 'AppLayoutHome'
        }
    },
    {
        path: '/app/space/user/profile',
        name: 'ProfileView',
        component: () => import('../views/ProfileView.vue'),
        meta: {
            auth : true,
            dashboard : 'user',
            // layout: 'AppLayoutHome'
        }
    },
    {
        path: '/app/space/user/transaction/status/success',
        name: 'TransactionStatusReport',
        component: () => import('../views/TransactionStatusReport.vue'),
        meta: {
            auth : true,
            dashboard : 'user',
            // layout: 'AppLayoutHome'
        }
    },
];

export default routes;