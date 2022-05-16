<template>
    <div class="">
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
                    <ticker-card v-for="(ticker, index) in tickers" :key="index" v-bind:ticker="ticker"></ticker-card>
                </div>
            </div>
            <div class="wf-flex wf-my-8 wf-flex-col md:wf-flex-row">
                <div class="wf-w-full wf-flex md:wf-mr-12 md:wf-flex-wrap wf-flex-col md:wf-flex-row wf-order-last md:wf-order-first wf-justify-center">
                    <FeatureCard v-for="(feature, index) in features" :key="index">
                        <template v-slot:header>
                            {{ feature.header }}
                        </template>
                        <template v-slot:icon>
                            <component :is="feature.icon" :class="feature.iconColor" class="wf-w-8 wf-h-8" />
                        </template>
                        <p class="wf-text-gray-600/60 wf-font-medium wf-text-xs wf-mt-4 wf-text-center">
                            {{ feature.content }}
                        </p>
                    </FeatureCard>
                </div>
                <div class="md:wf-w-4/5 wf-w-full wf-bg-gradient-to-r wf-from-transparent wf-via-pink-500/20 wf-to-transparent wf-min-h-14 wf-py-4 wf-order-first md:wf-order-last wf-bg-gradient-to- wf-justify-center md:wf-flex wf-flex-col">
                    <h3 role="heading" class="wf-p-2 wf-font-bold wf-text-white wf-text-2xl md:wf-text-4xl wf-text-center md:wf-text-left">
                        The most trusted cryptocurrency platform.
                    </h3>
                    <p class="wf-text-base wf-text-gray-500 wf-font-medium wf-p-4 wf-text-center md:wf-text-left wf-mb-2">
                        CryptoApp has a variety of features that make it the best place to start investing
                    </p>
                    <a href="#" role="button" class="wf-bg-yellow-700 wf-text-gray-200 wf-rounded-full wf-px-6 wf-py-3 wf-text-center wf-w-full md:wf-w-1/3 wf-font-medium wf-ml-4 md:wf-ml-0">
                        Let's Invest Now
                    </a>
                </div>
            </div>
            <section role="presentation" class="wf-mr-auto wf-mx-auto wf-rounded wf-bg-white wf-w-4/5 wf-px-12 wf-py-8">
                <h1 class="wf-text-center wf-text-gray-700 wf-text-xl wf-font-mono wf-font-medium">
                    Partners and Investors
                </h1>
                <div class="wf-flex wf-justify-center wf-flex-wrap wf-mt-6">
                    <div class="wf-w-1/2 md:wf-w-1/4 md:wf-mx-4">
                        <img src="@/assets/img/partners/binance.png" class="wf-object-cover wf-mx-4 wf-p-6">
                    </div>
                    <div class="wf-w-1/2 md:wf-w-1/4 md:wf-mx-4">
                        <img src="@/assets/img/partners/coinbase.png" class="wf-object-cover wf-mx-4 wf-p-6">
                    </div>
                     <div class="wf-w-1/2 md:wf-w-1/4 md:wf-mx-4">
                        <img src="@/assets/img/partners/blockchain.png" class="wf-object wf-mx-4 wf-p-6">
                     </div>
                     <div class="wf-w-1/2 md:wf-w-1/4 md:wf-mx-4">
                        <img src="@/assets/img/partners/binance.png" class="wf-object-cover wf-mx-4 wf-p-6">
                    </div>
                    <div class="wf-w-1/2 md:wf-w-1/4 md:wf-mx-4">
                        <img src="@/assets/img/partners/binance.png" class="wf-object-cover wf-mx-4 wf-p-6">
                    </div>
                    <div class="wf-w-1/2 md:wf-w-1/4 md:wf-mx-4">
                        <img src="@/assets/img/partners/binance.png" class="wf-object-cover wf-mx-4 wf-p-6">
                    </div>
                </div>
            </section>
            <section role="" class="wf-bg-white/80 wf-rounded wf-px-24 wf-py-20 wf-mt-12">
                <span class="wf-px-6  wf-py-5 wf-bg-white/50 wf-rounded-full">
                    <wallet  class="wf-w-12 wf-h-12 wf-fill-yellow-300 wf-stroke-yellow-700 wf-inline"/>
                    <span class="wf-px-2 wf-font-bold wf-text-xl wf-text-yellow-700">Wallet</span>
                </span>
                <div class="wf-flex wf-my-12">
                    <div class="wf-w-1/2">
                        <h1 class="wf-text-yellow-700 wf-font-medium wf-text-4xl wf-font-sans">
                            The Easiest and Most Powerful Crypto Wallet
                        </h1>
                        <ul class="wf-p-3 wf-m-2">
                            <li class="wf-bg-yellow-300/20 wf-rounded-xl wf-border wf-border-yellow-900/10 wf-px-6 wf-py-4 wf-text-yellow-700 wf-font-medium wf-text-base wf-my-4 wf-cursor-pointer" @click="toggleFeature" @focus="toggleFeature" v-for="(num, i) in 3" :key="i" :data-id="i">
                                Buy and Sell Crypto in Minutes
                                <transition
                                    enter-active-class="wf-duration-300 wf-ease-in wf-delay-150"
                                    enter-from-class="wf-transform wf-opacity-20 wf-colors h-0"
                                    enter-to-class="w-opacity-100 wf-h-auto"
                                    leave-active-class="wf-duration-200 wf-ease-out"
                                    leave-from-class="wf-opacity-100 wf-h-auto"
                                    leave-to-class="wf-transform wf-opacity-0 wf-h-0"
                                >
                                    <p v-if="i == current_id" class="wf-my-3">
                                        Instantly buy Bitcoin with credit card, debit card, or by linking your bank.
                                    </p>
                                </transition>
                            </li>
                        </ul>
                    </div>
                    <div class="wf-w-1/2 wf-flex wf-justify-end">
                        <div class="wf-ml-auto">
                            <img src="@/assets/img/tools/wallet-buy.png" class="wf-object-cover">
                        </div>

                    </div>
                </div>
            </section>
        </main>
    </div>
</template>

<script setup lang="ts">
    import HeaderComponent from '../components/layouts/HeaderComponent.vue';
    import TickerCard from '../components/cards/TickerCard.vue';
    import tickers from '../apis/tickers';
    import { Wallet, WalletOutline } from 'mdue';
    import { AcademicCapIcon, LockClosedIcon, AtSymbolIcon, BadgeCheckIcon } from '@heroicons/vue/solid';
    import FeatureCard from '../../../common/components/Cards/FeatureCard.vue';
    import { ref } from 'vue';

    const current_id = ref(null);
    const features = [
        {
            icon: AcademicCapIcon,
            iconColor: 'wf-text-yellow-900',
            header: 'Educative Material',
            content: 'Educative materials has been made available in the platform, where your can browse through.'
        },
        {
            icon: LockClosedIcon,
            iconColor: 'wf-text-green-900',
            header: 'Vault Protection',
            content: 'For added security, store your funds in a vault with time delayed withdrawals.'
        },
        {
            icon: AtSymbolIcon,
            iconColor: 'wf-text-purple-900',
            header: 'Multiple Account',
            content: 'Create multiple account for different purposes, and easily switch between them.'
        },
        {
            icon: BadgeCheckIcon,
            iconColor: 'wf-text-green-700',
            header: 'Special Activities',
            content: 'Get your account verified, and stand the chance to be able to borrow money from the platform.'
        }
    ]
    
    function toggleFeature($event) {
        console.dir($event.target)
        const ID = $event.target.dataset.id;
        current_id.value = ID;
        console.log(current_id.value, ID)
        // $event.target.firstElementChild.classList.remove('wf-hidden')
        // $event.target.firstElementChild.classList.add('wf-opacity-100')
        // $event.target.firstElementChild.classList.add('wf-opacity-0')
        // console.dir($event.target.firstElementChild);
    }



</script>

<style scoped>
    .h-0 {
        height: 0;
    }

    .h-auto {
        height: auto;
    }
</style>