<template>
    <div class="wf-h-full wf-bg-gray-100">
        <div class="wf-flex wf-pt-5 wf-h-full wf-pr-5">
            <!-- Sidebar Desktop -->
            <div class="wf-w-[16%] w-hidden md:wf-flex wf-flex-col wf-items-center wf-h-full wf-bg-gray-100">
                <!-- Company Logo -->
                <figure class="wf-mt-8 wf-mb-5">
                    <!-- <img> -->
                    <span class="wf-font-bold wf-text-gray-900/75 wf-text-3xl">
                        Spacearn
                    </span>
                </figure>
                <ul class="wf-w-full">
                    <li class="wf-mb-6 wf-relative before:wf-absolute before:wf-content-[''] before:wf-w-1 before:wf-h-full before:wf-bg-yellow-700 before:wf-rounded-r-lg">
                        <router-link to="#" class="wf-flex wf-items-center wf-py-1.5 wf-bg-yellow-700 wf-rounded-lg wf-ml-5 wf-text-gray-100">
                            <HomeIcon class="wf-w-8 wf-h-6 wf-mr-3 wf-ml-4" />
                            <span class="wf-font-bold wf-text-base">Dashboard</span>
                        </router-link>
                    </li>

                    <li class="wf-mb-6 wf-relative hover:before:wf-absolute before:wf-content-[''] before:wf-w-1 before:wf-h-full before:wf-bg-yellow-700/30 before:wf-rounded-r-lg">
                        <router-link to="#" class="wf-flex wf-items-center wf-py-1.5 hover:wf-bg-yellow-700/30 hover:wf-text-gray-900/50 wf-rounded-lg wf-ml-5 wf-text-yellow-700/40 wf-transition-all">
                            <ChartSquareBarIcon class="wf-w-8 wf-h-6 wf-mr-3 wf-ml-4" />
                            <span class="wf-font-bold wf-text-medium">Exchange</span>
                        </router-link>
                    </li>

                    <li class="wf-mb-6 wf-relative hover:before:wf-absolute before:wf-content-[''] before:wf-w-1 before:wf-h-full before:wf-bg-yellow-700/30 before:wf-rounded-r-lg">
                        <router-link to="#" class="wf-flex wf-items-center wf-py-1.5 hover:wf-bg-yellow-700/30 hover:wf-text-gray-900/50 wf-rounded-lg wf-ml-5 wf-text-yellow-700/40 wf-transition-all">
                            <Wallet class="wf-w-8 wf-h-6 wf-mr-3 wf-ml-4" />
                            <span class="wf-font-bold wf-text-medium">Wallet</span>
                        </router-link>
                    </li>

                    <li class="wf-mb-6 wf-relative hover:before:wf-absolute before:wf-content-[''] before:wf-w-1 before:wf-h-full before:wf-bg-yellow-700/30 before:wf-rounded-r-lg">
                        <router-link to="#" class="wf-flex wf-items-center wf-py-1.5 hover:wf-bg-yellow-700/30 hover:wf-text-gray-900/50 wf-rounded-lg wf-ml-5 wf-text-yellow-700/40 wf-transition-all">
                            <Wallet class="wf-w-8 wf-h-6 wf-mr-3 wf-ml-4" />
                            <span class="wf-font-bold wf-text-medium">Send</span>
                        </router-link>
                    </li>

                    <li class="wf-mb-6 wf-relative hover:before:wf-absolute before:wf-content-[''] before:wf-w-1 before:wf-h-full before:wf-bg-yellow-700/30 before:wf-rounded-r-lg">
                        <router-link to="#" class="wf-flex wf-items-center wf-py-1.5 hover:wf-bg-yellow-700/30 hover:wf-text-gray-900/50 wf-rounded-lg wf-ml-5 wf-text-yellow-700/40 wf-transition-all">
                            <Wallet class="wf-w-8 wf-h-6 wf-mr-3 wf-ml-4" />
                            <span class="wf-font-bold wf-text-medium">Receive</span>
                        </router-link>
                    </li>

                    <li class="wf-mb-6 wf-relative hover:before:wf-absolute before:wf-content-[''] before:wf-w-1 before:wf-h-full before:wf-bg-yellow-700/30 before:wf-rounded-r-lg">
                        <router-link to="#" class="wf-flex wf-items-center wf-py-1.5 hover:wf-bg-yellow-700/30 hover:wf-text-gray-900/50 wf-rounded-lg wf-ml-5 wf-text-yellow-700/40 wf-transition-all">
                            <Wallet class="wf-w-8 wf-h-6 wf-mr-3 wf-ml-4" />
                            <span class="wf-font-bold wf-text-medium">Profile</span>
                        </router-link>
                    </li>

                    <li class="wf-mb-6 wf-relative hover:before:wf-absolute before:wf-content-[''] before:wf-w-1 before:wf-h-full before:wf-bg-yellow-700/30 before:wf-rounded-r-lg">
                        <router-link to="#" class="wf-flex wf-items-center wf-py-1.5 hover:wf-bg-yellow-700/30 hover:wf-text-gray-900/50 wf-rounded-lg wf-ml-5 wf-text-yellow-700/40 wf-transition-all">
                            <Wallet class="wf-w-8 wf-h-6 wf-mr-3 wf-ml-4" />
                            <span class="wf-font-bold wf-text-medium">Settings</span>
                        </router-link>
                    </li>
                </ul>

                <form>
                    <button class="wf-outline-0 wf-bg-yellow-700 wf-px-10 wf-py-1 wf-font-medium wf-text-base wf-text-gray-100 wf-rounded wf-mt-10 hover:wf-bg-yellow-900 focus:wf-bg-yellow-900 hover:wf-ring hover:wf-ring-yellow-700/50 focus:wf-ring focus:wf-ring-yellow-700/50">Logout</button>
                </form>
            </div>

            <!-- Content area  -->
            <div class="wf-w-full md:wf-w-[62%] wf-h-full wf-px-4">
                <div class="wf-h-full wf-bg-white wf-rounded-l-3xl wf-shadow-lg"></div>
            </div>

            <div class="wf-w-full md:wf-w-[22%] wf-h-full">
                <div class="wf-h-full wf-bg-white/75 wf-rounded-r-3xl wf-shadow-lg"></div>
            </div>
        </div>
    </div>

</template>

<script setup lang="ts">
    import { Wallet, Tool } from 'mdue'
    import { HomeIcon, ChartSquareBarIcon } from '@heroicons/vue/solid'
    import NotificationsHeaderPartial from '../partials/NotificationsHeaderPartial.vue'
    import UserMenuHeaderPartial from '../partials/UserMenuHeaderPartial.vue'
    // import HelpHeaderPartial from '../components/partials/header/HelpHeaderPartial.vue'
    // import SearchModalHeaderPartial from '../components/partials/header/HelpHeaderPartial.vue'
    import SidebarPartial from '../partials/SidebarPartial.vue'
</script>