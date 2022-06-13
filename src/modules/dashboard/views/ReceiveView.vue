<template>
    <ViewWrapper>
        <div class="wf-flex wf-flex-col">
            <div class="wf-relative wf-w-full wf-mb-10">
                <div class="wf-absolute wf-right-0 wf-top-0 wf-w-full wf-flex">
                    <div class="wf-w-full wf-rounded-full wf-border wf-border-gray-300 wf-h-8 md:wf-h-14" v-if="searchBox">
                        <input class="wf-w-full wf-h-full wf-outline-transparent wf-border-0 wf-bg-transparent wf-px-4 focus:wf-outline-none placeholder:wf-font-bold placeholder:wf-text-gray-500 wf-text-base md:wf-text-xl wf-text-gray-600 wf-font-medium" @blur="searchBox = false" type="text" aria-autocomplete="true" v-model="searchValue" placeholder="what currency are you looking for?" v-focus @input="filterWallets">
                    </div>
                    <span class="wf-ml-auto wf-cursor-pointer" @click="searchBox = true" v-if="!searchBox">
                        <SearchIcon class="wf-w-6 wf-h-6 wf-text-gray-900" />
                    </span>
                </div> 
            </div>
            <div class="wf-flex wf-flex-col wf-mb-5">
                <span class="wf-text-gray-400 wf-text-sm wf-capitalize wf-font-medium">
                    balance
                </span>
                <span class="wf-text-gray-700 wf-text-2xl wf-font-bold">
                    $5130.65
                </span>
                <span class="wf-text-gray-500 wf-text-base wf-font-medium">
                    6 crypto Investments
                </span>
            </div>

            <div class="wf-flex wf-flex-col wf-mb-5">
                <span class="wf-text-xl wf-font-bold wf-capitalize wf-mb-3">
                    crypto wallets
                </span>
                <div>
                    <ul class="wf-flex wf-flex-col">
                        <li class="wf-flex wf-shado wf-border wf-border-gray-200 wf-rounded-lg wf-px-2 wf-py-2.5 wf-items-center wf-mb-3 last:wf-mb-0 wf-cursor-pointer hover:wf-bg-gray-50" v-for="wallet in fiteredWllets" :key="wallet.symbol">
                            <RoundedImage :bgW="'wf-w-8'" :bgH="'wf-h-8'" :class="'wf-mr-3 wf-border'"/>
                            <span class="wf-flex wf-flex-col wf-text-gray-900/90 wf-font-bold">
                                <span class="wf-text-base wf-capitalize">
                                    {{ wallet.wallet }}
                                </span>
                                <span class="wf-flex wf-items-center">
                                    <span class="wf-text-sm wf-pr-1">${{ wallet.balance }}</span>
                                    <span class="wf-uppercase wf-text-xs wf-text-gray-400">{{ wallet.amountInCurrency }} {{ wallet.symbol }}</span>
                                </span>
                            </span>
                            <span class="wf-ml-auto">
                                <ChevronRightIcon class="wf-text-gray-500 wf-w-5 wf-h-5" />
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </ViewWrapper>
</template>

<script setup lang="ts">
    import ViewWrapper from '../partials/ViewWrapper.vue';
    import { SearchIcon, ChevronRightIcon } from '@heroicons/vue/outline';
    import RoundedImage from '../../../common/components/Cards/RoundedImage.vue';
    import { ref, computed } from 'vue';

    const wallets = [
        {
            wallet: 'bitcoin',
            symbol: 'btc',
            balance: 234.54,
            amountInCurrency: 0.00256,
            img: ''
        },
        {
            wallet: 'ethereum',
            symbol: 'eth',
            balance: 575.54,
            amountInCurrency: 0.256,
            img: ''
        },
        {
            wallet: 'ripple',
            symbol: 'rpx',
            balance: 23,
            amountInCurrency: 59,
            img: ''
        },
        {
            wallet: 'tether',
            symbol: 'usdt',
            balance: 1000,
            amountInCurrency: 1000,
            img: ''
        }
    ]
    const searchValue = ref('');

    const fiteredWllets = computed(() => wallets.filter(el => el.wallet.indexOf(searchValue.value.toLowerCase()) != -1 || el.symbol.indexOf(searchValue.value.toLowerCase()) != -1))

    const searchBox = ref(false);

</script>