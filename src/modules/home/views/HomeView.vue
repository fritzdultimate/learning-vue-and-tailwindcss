<template>
    <div class="md:wf-h-full wf-bg-gradient-to-r wf-from-gray-900 md:wf-from-gray-900/95 md:wf-via-gray-900 wf-to-gray-900/95">
        <main class="wf-h-full wf-container wf-w-full wf-m-auto" role="main">
            <HeaderComponent  class="md:wf-px-1 md:wf-pt-4"/>
            <section role="presentation" class="wf-p-4 md:wf-p-6 wf-flex wf-flex-col md:wf-flex-row md:wf-flex-wrap wf-justify-center wf-mt-8 wf-overflow-clip">
                <div class="wf-flex wf-flex-col wf-w-full md:wf-w-1/2 wf-z-10">
                    <h1 role="heading" class="wf-p-2 wf-font-bold wf-text-white wf-text-3xl md:wf-text-6xl wf-text-center md:wf-text-left">
                        A trusted and secure cryptocurrency exchange.
                    </h1>
                    <h3 class="wf-text-base wf-text-gray-300 wf-p-4 wf-text-center md:wf-text-left">
                        Your guide to the world of an open financial system. Get started with the easiest and most secure platform to buy and trade cryptocurrency.
                    </h3>
                    <a href="#" role="button" class="wf-bg-yellow-700 wf-text-gray-200 wf-rounded-full wf-px-6 wf-py-3 wf-text-center wf-w-full md:wf-w-1/3 wf-font-medium">
                        Get Started Now
                    </a>
                </div>
                <div style="background-image: url('../../src/assets/img/illustration/ill-5.jpg')" class="wf-bg-contain wf-w-1/2 wf-p-10 wf-shadow-lg wf-shadow-gray-900 wf-scale-125 -wf-skew-y-2 wf-skew-x-6 wf-mt-6 wf-text-center wf-text-slate-600 wf-text-2xl wf-font-bold wf-hidden md:wf-block">
                    <h3 class="wf-hidden">
                        Easy dashboard to manage your assets, buy, send and exchange cryptocurrency, as well as buying and selling Nfts.
                    </h3>
                </div>
            </section>
            <div class="wf-flex wf-mt-8">
                <div class="wf-flex wf-w-full wf-flex-wrap wf-justify-center">
                    <div class="wf-w-full md:wf-w-1/4 wf-flex-row wf-shadow-xl wf-shadow-slate-900 wf-rounded wf-bg-black/50 wf-min-h-28 wf-m-2 md:wf-m-1 wf-flex" v-for="(ticker, index) in tickers" :key="index">
                        <div class="wf-block wf-p-3">
                            <img :src="ticker.logo_url" class="wf-w-8 wf-h-8 wf-rounded-full wf-mb-3">
                            <span class="wf-text-base wf-text-gray-500 wf-font-medium wf-mb-2 wf-capitalize">
                                {{ ticker.name }}
                            </span>
                            <div class="wf-font-bold wf-text-xl wf-text-white">
                                <span class="wf-uppercase">
                                    usd
                                </span>
                                <span>{{ formatNumberToCurrency(Number(ticker.price).toFixed(2)) }}</span>
                            </div>
                        </div>
                        <div class="wf-block wf-p-3 wf-ml-auto wf-pt-6">
                            <ArrowSmUpIcon v-if="is_gain" class="wf-h-4 wf-w-4 wf-text-green-700 wf-font-bold wf-inline" />
                            <ArrowSmDownIcon v-else class="wf-h-4 wf-w-4 wf-text-red-700 wf-font-bold wf-inline" />
                            <span :class="{'wf-text-green-700' : is_gain, 'wf-text-red-700': !is_gain}" class="wf-font-bold wf-text-base">{{ calculateGain(ticker['1d'].price_change, ticker.price) }}%</span>
                            <div class="wf-text-base wf-text-gray-700 wf-font-medium wf-uppercase wf-text-right wf-mt-8">
                                {{ ticker.currency }}
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </main>
    </div>
</template>

<script setup lang="ts">
    import HeaderComponent from '../components/layouts/HeaderComponent.vue';
    import tickers from '../apis/tickers';
    import { ArrowSmUpIcon, ArrowSmDownIcon } from '@heroicons/vue/solid';
    import numeral from 'numeral';
    import {ref} from 'vue';

    let is_gain = ref(false);
    function calculateGain(price_change, price) {
        console.log(+price_change, typeof +price)
        let diff = (+price / (+price - +price_change)) - 1;
        let pct = diff * 100;
        is_gain.value = diff > 0;
        return pct.toFixed(2);
    }

    let formatNumberToCurrency = (money) => numeral(money).format('0,0.00')

    console.log(numeral(100000000.098).format('0,0.000'));
    
</script>