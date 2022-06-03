<template>
    <div class="wf-bg-gray-100">
        <div class="wf-flex wf-flex-col md:wf-flex-row md:wf-pt-5 md:wf-pr-5">
            <!-- Sidebar Desktop -->
            <nav class="wf-absolut wf-bottom-0 wf-fixed wf-w-full wf-hidden md:wf-static md:wf-w-[16%] md:wf-flex md:wf-flex-col wf-items-center wf-bg-gray-100 wf-pb-10">
                <!-- Company Logo -->
                <figure class="wf-mt-8 wf-mb-5 wf-hidden md:wf-block">
                    <!-- <img> -->
                    <span class="wf-font-bold wf-text-gray-900/75 wf-text-3xl">
                        Spacearn
                    </span>
                </figure>
                <ul class="wf-w-full wf-flex md:wf-block">
                    <li class="wf-mb-6 wf-relative before:wf-content-[''] before:wf-w-1 before:wf-h-full before:wf-rounded-r-lg" :class="link.id == activeLink ? 'before:wf-absolute before:wf-bg-yellow-700' : 'hover:before:wf-absolute before:wf-bg-yellow-700/30' " v-for="(link, id) of NavLinks" :key="id">
                        <router-link :to="link.to" class="wf-flex wf-items-center wf-py-1.5 wf-rounded-lg wf-ml-5 wf-text-gray-100 wf-transition-all" :class="link.id == activeLink ? 'wf-bg-yellow-700' : 'hover:wf-text-gray-900/50 wf-text-yellow-700/40 hover:wf-bg-yellow-700/30'" @click.prevent="navigate(link)">
                            <component :is="link.icon" class="wf-w-8 wf-h-6 wf-mr-3 wf-ml-4" />
                            <span class="wf-font-bold">{{ link.name }}</span>
                        </router-link>
                    </li>
                </ul>

                <form class="wf-hidden md:wf-block">
                    <button class="wf-outline-0 wf-bg-yellow-700 wf-px-10 wf-py-1 wf-font-medium wf-text-base wf-text-gray-100 wf-rounded wf-mt-10 hover:wf-bg-yellow-900 focus:wf-bg-yellow-900 hover:wf-ring hover:wf-ring-yellow-700/50 focus:wf-ring focus:wf-ring-yellow-700/50">Logout</button>
                </form>
            </nav>
            <!-- NavBar Mobile -->

            <nav class="wf-fixed wf-bottom-0 wf-inset-x-0 wf-bg-yellow-100 wf-flex wf-justify-center wf-text-xs wf-text-yellow-900 wf-uppercase wf-font-mono md:wf-hidden wf-font-bold">
                <router-link to="#" class="wf-w-full wf-block wf-py-2 wf-px-3 wf-text-center hover:wf-bg-yellow-200 hover:wf-text-yellow-800 wf-transition wf-duration-300" v-for="(link, id) in mobileNavLinks" :key="id">
                    <component :is="link.icon" class="wf-w-4 wf-h-4 wf-mx-auto wf-mb-2" />
                    {{ link.name == 'Dashboard' ? 'home' : link.name }}
                </router-link>
            </nav>

            <!-- Content area  -->
            <div class="wf-w-full md:wf-w-[62%] wf-h-full md:wf-px-4">
                <div class="wf-h-full wf-bg-white md:wf-rounded-l-3xl md:wf-shadow-lg wf-px-5">
                    <div class="wf-flex wf-pt-10">
                        <div class="wf-flex wf-flex-col">
                            <span class="wf-text-gray-500/75 wf-capitalize wf-font-mono wf-text-base wf-font-medium">
                                hello Friz,
                            </span>
                            <span class="wf-text-xl wf-text-slate-700 wf-blur-[1px] wf-font-bold wf-capitalize">
                                welcome back!
                            </span>
                        </div>
                        <div class="wf-ml-auto">
                            <span class="wf-flex wf-justify-center wf-items-center wf-px-2 wf-py-2 wf-bg-gray-100/50 wf-shadow wf-rounded-md">
                                <i class="wf-relative before:wf-absolute before:wf-top-[1px] before:wf-right-[4px] before:wf-content-[''] before:wf-w-[7px] before:wf-h-[7px] before:wf-bg-red-500 before:wf-rounded-full">
                                    <BellIcon class="wf-w-6 wf-h-auto wf-text-slate-900/75" />
                                </i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="wf-w-full md:wf-w-[22%] wf-h-full">
                <div class="wf-h-full wf-bg-white/75 wf-rounded-r-3xl wf-shadow-lg"></div>
            </div>
        </div>
    </div>

</template>

<script setup lang="ts">
    import { Wallet } from 'mdue';
    import { HomeIcon, ChartSquareBarIcon } from '@heroicons/vue/solid'
    import { BellIcon } from '@heroicons/vue/outline'
    import NotificationsHeaderPartial from '../partials/NotificationsHeaderPartial.vue'
    import UserMenuHeaderPartial from '../partials/UserMenuHeaderPartial.vue'
    // import HelpHeaderPartial from '../components/partials/header/HelpHeaderPartial.vue'
    // import SearchModalHeaderPartial from '../components/partials/header/HelpHeaderPartial.vue'
    import SidebarPartial from '../partials/SidebarPartial.vue'
    import { ref, computed } from 'vue';

    const NavLinks = ref([
        {
            name: 'Dashboard',
            icon: HomeIcon,
            to: "#",
            id: 'dashboard',
            mobile: true

        },
        {
            name: 'Exchange',
            icon: ChartSquareBarIcon,
            to: "#",
            id: 'exchange',
        },
        {
            name: 'Wallet',
            icon: Wallet,
            to: "#",
            id: 'wallet',
            mobile: true
        },
        {
            name: 'Send',
            icon: Wallet,
            to: "#",
            id: 'send',
        },
        {
            name: 'Receive',
            icon: Wallet,
            to: "#",
            id: 'receive'
        },
        {
            name: 'Buy',
            icon: Wallet,
            to: "#",
            id: 'buy',
            mobile: true,
        },
        {
            name: 'Sell',
            icon: Wallet,
            to: "#",
            id: 'sell',
            mobile: true
        },
        {
            name: 'Profile',
            icon: Wallet,
            to: "#",
            id: 'profile',
            mobile: true,
        },
        {
            name: 'Settings',
            icon: Wallet,
            to: "#",
            id: 'settings'
        }
    ])
    const activeLink = ref('dashboard')

    const mobileNavLinks = computed(() => NavLinks.value.filter(el => el.mobile));

    function navigate(nav) {
        activeLink.value = nav.id;
    }
</script>