<template>
    <!-- Sidebar Desktop -->
    <nav
        class="wf-absolut wf-bottom-0 wf-fixed wf-w-full wf-hidden md:wf-static md:wf-w-[16%] md:wf-flex md:wf-flex-col wf-items-center wf-bg-gray-100 wf-pb-10">
        <!-- Company Logo -->
        <figure class="wf-mt-8 wf-mb-5 wf-hidden md:wf-block">
            <!-- <img> -->
            <span class="wf-font-bold wf-text-gray-900/75 wf-text-3xl">
                Spacearn
            </span>
        </figure>
        <ul class="wf-w-full wf-flex md:wf-block">

            <li class="wf-mb-6 wf-relative before:wf-content-[''] before:wf-w-1 before:wf-h-full before:wf-rounded-r-lg"
                :class="activeLink == link.to ? 'before:wf-absolute before:wf-bg-yellow-700' : 'hover:before:wf-absolute before:wf-bg-yellow-700/30' "
                v-for="(link, id) of NavLinks" :key="id">
                <router-link :to="link.to"
                    class="wf-flex wf-items-center wf-py-1.5 wf-rounded-lg wf-ml-5 wf-text-gray-100 wf-transition-all"
                    :class="activeLink == link.to ? 'wf-bg-yellow-700' : 'hover:wf-text-gray-900/50 wf-text-[#a16207bf] hover:wf-bg-yellow-700/30'"
                    @click.prevent="navigate(link.to)">
                    <component :is="link.icon" class="wf-w-8 wf-h-6 wf-mr-3 wf-ml-4" />
                    <span class="wf-font-bold">{{ link.name }}</span>
                    <!-- {{ activeLink }} -->
                </router-link>
            </li>
        </ul>

        <form class="wf-hidden md:wf-block">
            <button @click.prevent="logout"
                class="wf-outline-0 wf-bg-yellow-700 wf-px-10 wf-py-1 wf-font-medium wf-text-base wf-text-gray-100 wf-rounded wf-mt-10 hover:wf-bg-yellow-900 focus:wf-bg-yellow-900 hover:wf-ring hover:wf-ring-yellow-700/50 focus:wf-ring focus:wf-ring-yellow-700/50">Logout</button>
        </form>
    </nav>
    <!-- NavBar Mobile -->

    <nav
        class="wf-fixed wf-bottom-0 wf-inset-x-0 wf-bg-gray-100 wf-rounded-t-xl wf-flex wf-justify-center wf-text-xs wf-text-gray-900 wf-uppercase wf-font-mono md:wf-hidden wf-font-bold wf-shadow-2xl wf-shadow-light-800">
        <router-link to="#"
            class="wf-w-full wf-block wf-py-2 wf-px-3 wf-text-center hover:wf-bg-gray-200 hover:wf-text-gray-800 wf-transition wf-duration-300"
            v-for="(link, id) in mobileNavLinks" :key="id">
            <component :is="link.icon" class="wf-w-6 wf-h-6 wf-mx-auto wf-mb-2 wf-mt-2" />
            <!-- {{ link.name == 'Dashboard' ? 'home' : link.name }} -->
        </router-link>
    </nav>
</template>

<script setup lang="ts">
    import { computed, ref } from 'vue';
    import  router  from '@/router';
    import { HomeIcon, ChartSquareBarIcon, TrendingDownIcon, TrendingUpIcon } from '@heroicons/vue/solid';
    import { UserIcon, CreditCardIcon } from '@heroicons/vue/outline';
    import { MouseVariant, Wallet } from 'mdue';

    const NavLinks = ref([
        {
            name: 'Dashboard',
            icon: HomeIcon,
            to: "/app/space/user/dashboard",
            id: 'dashboard',
            mobile: true

        },
        {
            name: 'Exchange',
            icon: ChartSquareBarIcon,
            to: "/app/space/user/exchange",
            id: 'exchange',
        },
        {
            name: 'Wallet',
            icon: CreditCardIcon,
            to: "/app/space/user/wallet",
            id: 'wallet',
            mobile: true
        },
        {
            name: 'Send',
            icon: Wallet,
            to: "/app/space/user/send",
            id: 'send',
        },
        {
            name: 'Receive',
            icon: Wallet,
            to: "/app/space/user/receive",
            id: 'receive'
        },
        {
            name: 'Fund',
            icon: TrendingDownIcon,
            to: "/app/space/user/buy",
            id: 'fund',
            mobile: true,
        },
        {
            name: 'Profile',
            icon: UserIcon,
            to: "/app/space/user/profile",
            id: 'profile',
            mobile: true,
        },
        {
            name: 'Settings',
            icon: Wallet,
            to: "/app/space/user/settings",
            id: 'settings'
        }
    ])
    // const activeLink = shallowRef('dashboard')

    const mobileNavLinks = computed(() => NavLinks.value.filter(el => el.mobile));
    const activeLink = computed(() => router.currentRoute.value.path);
    console.log(activeLink.value)

    function navigate(path: string) {
       router.push(path);
    }
    function logout(){

    }
</script>