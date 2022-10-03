<template>
    <div class="wf-bg-gray-100">
        <div class="wf-flex wf-flex-col md:wf-flex-row md:wf-pt-5 md:wf-pr-5">

            <!-- Left Sidebar -->
            <SidebarPartial />

            <!-- Content area  -->
            <ContentAreaPartial class="md:wf-ml-10">
                <div class="wf-flex">
                    <div class="wf-flex wf-flex-col">
                        <span class="wf-text-gray-500/75 wf-capitalize wf-font-mono wf-text-base wf-font-bold">
                            hello Darlington,
                        </span>
                        <span class="wf-text-xl wf-text-slate-700 wf-blur-[1px] wf-font-bold wf-capitalize">
                            welcome back!
                        </span>
                    </div>
                    <div class="wf-ml-auto">
                        <NotificationsHeaderPartial class="md:wf-hidden"/>
                        <SearchBoxHeaderPartial class="wf-hidden md:wf-block" />
                    </div>
                </div>

                <!-- Main content -->
                <div class="wf-flex wf-flex-col wf-mt-10">
                    <!-- Account balance card -->
                    <div class="wf-w-full wf-overflow-hidden wf-h-24 md:wf-h-48 wf-rounded-md wf-bg-black/90 md:wf-bg-blue-800/75 wf-flex wf-relative wf-items-center wf-px-5">
                        <div class="md:wf-hidden wf-block wf-absolute wf-w-[70%] wf-h-28 wf-rounded-full wf-bg-gray-500/20 wf-rotate-[15deg] -wf-left-[115px] wf-top-6 wf-bg-"></div>
                        <div class="wf-absolute wf-w-[70%] md:wf-w-[200%] wf-h-28 wf-rounded-full md:wf-bg-blue-500/20 wf-bg-gray-500/20 wf-rotate-[15deg] -wf-right-[115px] md:-wf-right-[16px] wf-bottom-6 md:wf-bottom-16 wf-z-0"></div>
                        <CreditCardIcon class="md:wf-block wf-hidden wf-h-10 wf-w-10 wf-text-gray-300 wf-mr-5" />
                        <div class="wf-flex wf-flex-col">
                            <span class="wf-capitalize wf-text-gray-300/75 wf-text-base md:wf-text-xl wf-font-medium">
                                current balance
                            </span>
                            <span class="wf-text-2xl md:wf-text-4xl wf-text-gray-100 wf-font-bold">
                                $ 4,570,80
                            </span>
                        </div>
                        <div class="wf-ml-auto">
                            <div class="wf-bg-white md:wf-bg-transparent wf-relative wf-z-10 wf-rounded-full md:wf-rounded-none  wf-mr-8 md:wf-mr-0 wf-p-3 md:wf-p-0 wf-flex wf-border-4 md:wf-border-transparent wf-border-black/90">
                                <PlusIcon class="wf-block md:wf-hidden wf-w-4 wf-h-auto wf-text-black wf-font-bold" />
                                <button class="wf-hidden md:wf-block wf-text-base wf-font-bold wf-text-blue-900 wf-bg-blue-100 wf-px-8 wf-py-3 wf-rounded wf-transition wf-duration-700 hover:wf-bg-blue-800 hover:wf-text-blue-100 wf-shadow">Buy coins</button>
                            </div>
                        </div>
                    </div>

                    <!-- Invest in stocks, crypto etc -->
                    <InvestHeroCard v-for="(card, i) in investmentCallActionCards" :key="i" :item="card.item" :icon="card.icon" :bg-color="card.bgColor" :border-color="card.borderColor" :text-color="card.textColor" />

                    <div class="wf-flex wf-mt-5">
                        <div class="wf-w-1/3">
                            <div class="wf-rounded-md wf-h-[105px] wf-bg-blue-700/80 wf-w-[calc(100%-10px)] wf-flex wf-flex-col wf-justify-center wf-items-center wf-text-blue-100">
                                <span class="wf-flex wf-justify-center wf-items-center wf-p-2 wf-rounded-full wf-shadow wf-bg-blue-400">
                                    <ArrowUpRightIcon class="wf-w-6 wf-h-6" />
                                </span>
                                <span class="wf-text-base wf-font-bold wf-mt-3">Send</span>
                            </div>
                        </div>
                        <div class="wf-w-1/3">
                            <div class="wf-mx-auto wf-rounded-md wf-h-[105px] wf-bg-purple-700/80 wf-w-[calc(100%-10px)] wf-flex wf-flex-col wf-justify-center wf-items-center wf-text-purple-100">
                                <span class="wf-p-2 wf-rounded-full wf-shadow wf-bg-purple-400">
                                    <ArrowUpRightIcon class="wf-w-6 wf-h-6 wf-rotate-180" />
                                </span>
                                <span class="wf-text-base wf-font-bold wf-mt-3">Receive</span>
                            </div>
                        </div>
                        <div class="wf-w-1/3">
                            <div class="wf-ml-auto wf-rounded-md wf-h-[105px] wf-bg-orange-700/80 wf-w-[calc(100%-10px)] wf-flex wf-flex-col wf-justify-center wf-items-center wf-text-orange-100">
                                <span class="wf-p-2 wf-rounded-full wf-shadow wf-bg-orange-400">
                                    <SquaresPlusIcon class="wf-w-6 wf-h-6" />
                                </span>
                                <span class="wf-text-base wf-font-bold wf-mt-3">More</span>
                            </div>
                        </div>
                    </div>

                    <div class="wf-flex wf-flex-col wf-mt-5">
                        <span class="wf-ml-auto wf-mb-2">
                            <router-link to="#" class="wf-mr-2 wf-text-sm wf-font-medium wf-text-gray-500">
                                See all
                            </router-link>
                        </span>
                        <div class="wf-flex wf-flex-wrap">
                            <div class="wf-w-1/5 md:wf-hidden wf-flex wf-flex-col wf-items-center wf-mx-px first:wf-ml-0">
                                <figure class="wf-p-1 wf-bg-gray-100 wf-border wf-border-gray-300 wf-rounded-full">
                                    <span class="wf-bg-black wf-rounded-full wf-flex wf-p-1.5 wf-justify-center wf-items-center wf-text-gray-100">
                                        <MagnifyingGlassIcon class="wf-w-6 wf-h-6" />
                                    </span>
                                    
                                </figure>
                                <span class="wf-text-sm wf-text-gray-600 wf-font-bold wf-mt-2">
                                    Search
                                </span>
                            </div>
                            <CoinDataPartial v-for="i in 3" :key="i"/>
                        </div>
                    </div>

                    <div class="wf-flex wf-flex-col wf-mt-5">
                        <RecentActivityPartial class="md:wf-hidden"/>
                        <div class="wf-block wf-ml-auto">
                            <button class="wf-bg-yellow-600 wf-text-white wf-text-sm md:wf-text-base wf-px-6 wf-py-1 wf-rounded-md wf-text-center wf-font-bold hover:wf-bg-yellow-900 focus:wf-ring-1 focus:wf-ring-yellow-500 focus:wf-border">
                                See all
                            </button>
                        </div>
                    </div>

                    <div class="wf-flex wf-flex-col wf-my-5">
                        <div class="wf-text-gray-700 wf-text-sm md:wf-text-base wf-font-bold">
                            Spacearn Charts
                        </div>
                    </div>
                </div>
            </ContentAreaPartial>

            <!-- Right Sidebar -->
            <RightSidebarPartial />
        </div>
    </div>
</template>

<script setup lang="ts">
    import {  ArrowUpRightIcon, SquaresPlusIcon } from '@heroicons/vue/20/solid'
    import { PlusIcon, MagnifyingGlassIcon, CreditCardIcon, ShoppingCartIcon } from '@heroicons/vue/24/outline';
    import CoinDataPartial from '../partials/CoinDataPartial.vue';
    import SearchBoxHeaderPartial from '../partials/SearchBoxHeaderPartial.vue';
    import ContentAreaPartial from '../partials/ContentAreaPartial.vue';
    import SidebarPartial from '../partials/SidebarPartial.vue';
    import RecentActivityPartial from '../partials/RecentActivityPartial.vue';
    import RightSidebarPartial from '../partials/RightSidebarPartial.vue';
    import InvestHeroCard from '../components/cards/InvestHeroCard.vue';
    import { ref, computed } from 'vue';
    import { onBeforeMount, onMounted } from 'vue';
    import topbar from '../../../plugins/topbar';

    onBeforeMount(async () => {
        topbar.show();

    })
    onMounted(() => topbar.hide())

    const investmentCallActionCards = [
        {
            item: 'Invest on Cryptocurrency',
            icon: ShoppingCartIcon,
            bgColor: 'wf-bg-yellow-200',
            borderColor: 'wf-border-yellow-600',
            textColor: 'wf-text-yellow-700'
        },
        {
            item: 'Invest on Live Socks',
            icon: ShoppingCartIcon,
            bgColor: 'wf-bg-green-200',
            borderColor: 'wf-border-green-600',
            textColor: 'wf-text-green-700'
        },
        {
            item: 'Invest on Real Estate',
            icon: ShoppingCartIcon,
            bgColor: 'wf-bg-red-200',
            borderColor: 'wf-border-red-600',
            textColor: 'wf-text-red-700'
        },
        {
            item: 'Mint NFTs',
            icon: ShoppingCartIcon,
            bgColor: 'wf-bg-blue-200',
            borderColor: 'wf-border-blue-600',
            textColor: 'wf-text-blue-700'
        }
    ]
</script>