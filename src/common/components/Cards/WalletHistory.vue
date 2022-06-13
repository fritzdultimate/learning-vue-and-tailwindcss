<template>
    <div class="wf-flex wf-flex-col">
        <div class="wf-flex">
            <span class="wf-text-gray-800 wf-font-bold wf-text-base wf-capitalize wf-mb-5">
                History
            </span>
        </div>
        <div class="">
            <ul class="wf-flex wf-flex-col">
                <li class="wf-w-full hover:wf-bg-gray-50 md:hover:wf-bg-gray-100 wf-transition wf-duration-300 wf-border-b wf-border-b-gray-200 last:wf-border-b-0" v-for="history in histories" :key="history.coin">
                    <router-link to="#" class="wf-flex wf-py-3 wf-px-1">
                        <span class="wf-mr-2 wf-p-1.5 wf-rounded wf-bg-gray-100 wf-flex wf-justify-center wf-items-center">
                            <ReplyIcon class="wf-w-5 wf-h-5 wf-text-green-600" v-if="history.type == 'received'"/>
                            <ReplyIcon class="wf-w-5 wf-h-5 wf-text-red-600 wf-rotate-[180deg]" v-else/>
                        </span>
                        <span class="wf-flex wf-flex-col wf-justify-center wf-font-bold wf-text-sm md:wf-text-base wf-text-gray-800">
                            <span class="wf-capitalize">{{ history.type }}</span>
                            <span class="wf-font-medium wf-text-xs wf-text-gray-500">08 May, 01:45 PM</span>
                        </span>

                        <div class="wf-ml-auto wf-flex wf-items-center wf-font-bold wf-text-sm">
                            <span class="wf-flex wf-flex-col wf-justify-center wf-mr-3 wf-text-right">
                                <span class="" :class="[history.type == 'received'? 'wf-text-green-600' : 'wf-text-red-600']"><span>{{ history.type == 'received' ? '+' : '-' }}</span>${{ history.amount }}</span>
                                <span class="wf-uppercase wf-text-xs wf-font-medium wf-text-gray-500"><span>{{ history.type == 'received' ? '+' : '-' }}</span>{{ history.amountInCoin }} {{ history.coin }}</span>
                            </span>
                            <ChevronRightIcon class="wf-w-5 wf-h-5 wf-text-gray-300"/>
                        </div>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ChevronRightIcon, ReplyIcon } from '@heroicons/vue/outline';

    const histories = [
        {
            type: 'sent',
            amount: 590.54,
            coin: 'btc',
            amountInCoin: 0.0393
        },
        {
            type: 'received',
            amount: 590.54,
            coin: 'usdt',
            amountInCoin: 589
        },
        {
            type: 'sent',
            amount: 894.54,
            coin: 'eth',
            amountInCoin: 0.493
        },
        {
            type: 'received',
            amount: 938.54,
            coin: 'doge',
            amountInCoin: 987
        }
    ]
</script>