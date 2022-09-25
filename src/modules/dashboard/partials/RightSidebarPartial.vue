<template>
    <div class="wf-w-full md:wf-w-[22%] wf-h-full wf-ml-5 wf-hidden md:wf-block">
        <div class="wf-h-full wf-bg-white/75 wf-rounded-r-3xl wf-shadow-lg wf-px-3 wf-pb-5">
            <div class="wf-flex wf-pt-10 wf-items-center wf-mx-2">
                <NotificationsHeaderPartial class="wf-cursor-pointer"/>
                <div class="wf-ml-auto">
                    <figure class="wf-rounded-full wf-flex wf-justify-center wf-items-center wf-cursor-pointer">
                        <img src="../../../../src/assets/img/fritz_1.jpg" class="wf-cover wf-w-8 wf-h-8 wf-rounded-full">
                        <span class="wf-text-gray-800 wf-text-xs wf-font-bold wf-ml-2 wf-flex wf-justify-center wf-items-center">
                            Nwosu Darlington
                            <ChevronDownIcon class="wf-w-4 wf-h-4 wf-text-gray-500" />
                        </span>
                    </figure>
                </div>
            </div>
            <div v-for="(balance, i) in balanceSideBarRight" :key="i" class="wf-relative wf-overflow-hidden wf-mt-5 wf-rounded-lg wf-mx-2 wf-flex wf-flex-col wf-pl-3 wf-py-2 wf-shadow-md" :class="[balance.bgColor, balance.shadowColor]">
                <span class="wf-font-bold" :class="[balance.textColor]">{{ balance.name }}</span>
                <span class="wf-text-2xl wf-font-bold" :class="[balance.textColor]">
                    ${{ balance.balance }}
                </span>

                <div class="wf-flex wf-flex-col wf-pt-3 wf-relative wf-z-10">
                    <h5 class="wf-text-sm wf-font-medium" :class="[balance.textColor]">
                        Monthly profit
                    </h5>
                    <p class="wf-flex">
                        <span class="wf-text-[18px] wf-font-medium" :class="[balance.textColor]">
                            ${{ balance.monthly }}
                        </span>
                        <span class="wf-ml-auto wf-mr-3 wf-px-3 wf-rounded-full wf-font-medium wf-text-xs wf-flex wf-justify-center wf-items-center" :class="[balance.gain.textColor, balance.gain.bgColor]">
                            +10%
                        </span>
                    </p>
                </div>
                <div class="wf-absolute -wf-top-[50%]  wf-right-0 wf-w-20 wf-h-20 wf-border-[20px] wf-opacity-10 wf-box-content wf-rounded-full"></div>
                    <div class="wf-absolute -wf-bottom-[50%]  wf-left-0 wf-w-20 wf-h-20 wf-border-[20px] wf-opacity-10 wf-box-content wf-rounded-full"></div>
            </div>

            <div class="wf-mx-2 wf-my-5 wf-flex wf-justify-center">
                <div class="wf-w-1/2 wf-flex wf-justify-center">
                    <button class="wf-mr-3 wf-w-full wf-flex wf-items-center wf-justify-start wf-px-3 wf-py-2 wf-rounded-md wf-bg-purple-700 wf-text-purple-100 hover:wf-bg-purple-900 wf-text-sm">
                        <IdentificationIcon class="wf-w-6 wf-h-6 wf-mr-1" />
                        NFTs
                    </button>
                </div>
                <div class="wf-w-1/2 wf-flex wf-justify-center">
                    <button class="wf-mr- wf-w-full wf-flex wf-items-center wf-justify-start wf-px-3 wf-py-2 wf-rounded-md wf-bg-sky-700 wf-text-sky-100 hover:wf-bg-sky-900 wf-text-sm">
                        <HomeIcon class="wf-w-6 wf-h-6 wf-mr-1" />
                        Real Estate
                    </button>
                </div>
            </div>

            <div class="wf-flex wf-flex-col wf-mt-10 wf-mx-2">
                <RecentActivityPartial class="wf-hidden md:wf-block"/>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref, watch, onBeforeMount } from 'vue';
    import NotificationsHeaderPartial from './NotificationsHeaderPartial.vue';
    import { HomeIcon, ChevronDownIcon } from '@heroicons/vue/solid';
    import { IdentificationIcon } from '@heroicons/vue/outline';
    import RecentActivityPartial from './RecentActivityPartial.vue';


    function computeBalanceCardBgColor(color: string, strength: string) {
        return `wf-bg-${color}-${strength}`;
    }
    const balances = ref({
        crypto : 0
    });

    let balanceSideBarRight = ref([
        {
            name: 'Total Balance',
            balance: 50000,
            monthly: 12.5,
            bgColor: 'wf-bg-gray-600',
            shadowColor: 'wf-shadow-gray-700',
            textColor: 'wf-text-gray-100',
            gain: {
                textColor: 'wf-bg-gray-700',
                bgColor: 'wf-text-gray-200',
            }
        },
        {
            name: 'Crypto Currency',
            balance: 50000,
            monthly: 12.5,
            bgColor: 'wf-bg-yellow-600',
            shadowColor: 'wf-shadow-yellow-700',
            textColor: 'wf-text-yellow-100',
            gain: {
                textColor: 'wf-bg-yellow-700',
                bgColor: 'wf-text-yellow-200',
            }
        },
        {
            name: 'Live Stock',
            balance: 60000,
            monthly: 12.5,
            bgColor: 'wf-bg-green-600',
            shadowColor: 'wf-shadow-green-700',
            textColor: 'wf-text-green-100',
            gain: {
                textColor: 'wf-bg-green-700',
                bgColor: 'wf-text-green-200',
            }
        },
        {
            name: 'Real Estate',
            balance: 50000,
            monthly: 12.5,
            bgColor: 'wf-bg-red-600',
            shadowColor: 'wf-shadow-red-700',
            textColor: 'wf-text-red-100',
            gain: {
                textColor: 'wf-bg-red-700',
                bgColor: 'wf-text-red-200',
            }
        },
        {
            name: 'NFTs',
            balance: 560000,
            monthly: 12.5,
            bgColor: 'wf-bg-blue-600',
            shadowColor: 'wf-shadow-blue-700',
            textColor: 'wf-text-blue-100',
            gain: {
                textColor: 'wf-bg-blue-700',
                bgColor: 'wf-text-blue-200',
            }
        }
    ]);
    onBeforeMount(async () => {
        
    });
</script>