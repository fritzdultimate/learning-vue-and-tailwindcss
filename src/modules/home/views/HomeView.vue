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
            <FeatureSectionCards :features="walletFeature" :header="'The Easiest and Most Powerful Crypto Wallet'" :headerIcon="{text: 'Wallet', icon: Wallet}"/>

            <div class="wf-my-8 wf-bg-gray-900 wf-rounded-xl wf-py-10">
                <h3 role="heading" class="wf-font-bold wf-text-white wf-text-2xl md:wf-text-4xl wf-text-center md:wf-text-center wf-block wf-p-3 md:wf-p-6">
                    Why is our site the best place to make investment?.
                </h3>
                <div class="wf-w-full wf-flex md:wf-mr-12 md:wf-flex-wrap wf-flex-col md:wf-flex-row wf-order-last md:wf-order-first wf-justify-center">
                    <FeatureCard v-for="(feature, index) in whyWeAreTheBest" :key="index">
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
            </div>
            <section class="wf-flex wf-flex-col wf-items-center">
                <h1 class="wf-text-gray-200 wf-font-serif wf-text-base md:wf-text-xl wf-uppercase">
                    For Sale
                </h1>
                <h2 class="wf-text-gray-300 wf-font-serif wf-text-2xl md:wf-text-5xl wf-capitalize wf-py-2 md:wf-py-4">
                    Local branches nationwide
                </h2>
                <!-- <div class="wf-relative wf-w-full wf-h-72 wf-mt-10 wf-mb-16"> -->
                    <!-- <div class="slide-container wf-flex wf-flex-nowrap wf-justify-center wf-absolute"> -->
                        
                        <div class="slide wf-h-72 wf-w-80 wf-relative wf-m-3">
                            <div class="wf-h-56 wf-w-80 wf-bg-yellow-200 wf-rounded-xl wf-absolute">
                                <span class="wf-rounded-full wf-bg-yellow-700 wf-text-slate-900 wf-px-6 wf-py-1 wf-font-medium wf-absolute wf-m-2">
                                    Out of STC
                                </span>
                                <img src="@/assets/img/houses/house_1.png" class="wf-object-cover wf-rounded-xl wf-h-56">
                            </div>
                            <div class="price-tag wf-text-white wf-absolute wf-w-full wf-top-56 wf-mt-4">
                                <h5 class="wf-text-gray-300 wf-text-base wf-font-medium">
                                    Claremont Close, Angel, N1
                                </h5>
                                <div class="wf-flex wf-justify-star">
                                    <span class="wf-text-gray-400 wf-px-3">
                                        <Bed class="wf-h-4 wf-w-4 wf-inline" />
                                        <span class="wf-text-base wf-font-normal">
                                            3
                                        </span>
                                    </span>
                                    <span class="wf-text-gray-400">
                                        <TagIcon class="wf-h-4 wf-w-4 wf-inline" />
                                        <span class="wf-text-base wf-font-normal">
                                            $600,000
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="slide wf-h-72 wf-w-80 wf-relative wf-m-3">
                            <div class="wf-h-56 wf-w-80 wf-bg-yellow-200 wf-rounded-xl wf-absolute">
                                <span class="wf-rounded-full wf-bg-yellow-700 wf-text-slate-200 wf-px-6 wf-py-1 wf-font-medium wf-absolute wf-m-2">
                                    Out of STC
                                </span>
                                <img src="@/assets/img/houses/house_2.jpg" class="wf-object-cover wf-rounded-xl wf-h-56">
                            </div>
                            <div class="price-tag wf-text-white wf-absolute wf-w-full wf-top-56 wf-mt-4">
                                <h5 class="wf-text-gray-300 wf-text-base wf-font-medium">
                                    Poynder Court, Camden Road, Holloway, N7
                                </h5>
                                <div class="wf-flex wf-justify-star">
                                    <span class="wf-text-gray-400 wf-px-3">
                                        <Bed class="wf-h-4 wf-w-4 wf-inline" />
                                        <span class="wf-text-base wf-font-normal">
                                            1
                                        </span>
                                    </span>
                                    <span class="wf-text-gray-400">
                                        <TagIcon class="wf-h-4 wf-w-4 wf-inline" />
                                        <span class="wf-text-base wf-font-normal">
                                            $320,000
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="slide wf-h-72 wf-w-80 wf-relative wf-m-3">
                            <div class="wf-h-56 wf-w-80 wf-bg-yellow-200 wf-rounded-xl wf-absolute">
                                <span class="wf-rounded-full wf-bg-yellow-700 wf-text-slate-900 wf-px-6 wf-py-1 wf-font-medium wf-absolute wf-m-2">
                                    Out of STC
                                </span>
                                <img src="@/assets/img/houses/house_3.jpg" class="wf-object-cover wf-rounded-xl wf-h-56">
                            </div>
                            <div class="price-tag wf-text-white wf-absolute wf-w-full wf-top-56 wf-mt-4">
                                <h5 class="wf-text-gray-300 wf-text-base wf-font-medium">
                                    Rotherfield Street, Islington, E1
                                </h5>
                                <div class="wf-flex wf-justify-star">
                                    <span class="wf-text-gray-400 wf-px-3">
                                        <Bed class="wf-h-4 wf-w-4 wf-inline" />
                                        <span class="wf-text-base wf-font-normal">
                                            3
                                        </span>
                                    </span>
                                    <span class="wf-text-gray-400">
                                        <TagIcon class="wf-h-4 wf-w-4 wf-inline" />
                                        <span class="wf-text-base wf-font-normal">
                                            $900,000
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="slide wf-h-72 wf-w-80 wf-relative wf-m-3">
                            <div class="wf-h-56 wf-w-80 wf-bg-yellow-200 wf-rounded-xl wf-absolute">
                                <span class="wf-rounded-full wf-bg-green-700 wf-text-gray-300 wf-px-6 wf-py-1 wf-font-medium wf-absolute wf-m-2">
                                    Available
                                </span>
                                <img src="@/assets/img/houses/house_4.jpg" class="wf-object-cover wf-rounded-xl wf-h-56">
                            </div>
                            <div class="price-tag wf-text-white wf-absolute wf-w-full wf-top-56 wf-mt-4">
                                <h5 class="wf-text-gray-300 wf-text-base wf-font-medium">
                                    John Strype Court, Leyton, E10
                                </h5>
                                <div class="wf-flex wf-justify-star">
                                    <span class="wf-text-gray-400 wf-px-3">
                                        <Bed class="wf-h-4 wf-w-4 wf-inline" />
                                        <span class="wf-text-base wf-font-normal">
                                            4
                                        </span>
                                    </span>
                                    <span class="wf-text-gray-400">
                                        <TagIcon class="wf-h-4 wf-w-4 wf-inline" />
                                        <span class="wf-text-base wf-font-normal">
                                            $600,000
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="slide wf-h-72 wf-w-80 wf-relative wf-m-3">
                            <div class="wf-h-56 wf-w-80 wf-bg-yellow-200 wf-rounded-xl wf-absolute">
                                <span class="wf-rounded-full wf-bg-yellow-700 wf-text-slate-900 wf-px-6 wf-py-1 wf-font-medium wf-absolute wf-m-2">
                                    Out of STC
                                </span>
                                <img src="@/assets/img/houses/house_5.jpg" class="wf-object-cover wf-rounded-xl wf-h-56">
                            </div>
                            <div class="price-tag wf-text-white wf-absolute wf-w-full wf-top-56 wf-mt-4">
                                <h5 class="wf-text-gray-300 wf-text-base wf-font-medium">
                                    Claremont Close, Angel, N1
                                </h5>
                                <div class="wf-flex wf-justify-star">
                                    <span class="wf-text-gray-400 wf-px-3">
                                        <Bed class="wf-h-4 wf-w-4 wf-inline" />
                                        <span class="wf-text-base wf-font-normal">
                                            5
                                        </span>
                                    </span>
                                    <span class="wf-text-gray-400">
                                        <TagIcon class="wf-h-4 wf-w-4 wf-inline" />
                                        <span class="wf-text-base wf-font-normal">
                                            $1,600,000
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="slick">
                            <div>1</div>
                            <div>2</div>
                            <div>3</div>
                        </div>
                    <!-- </div> -->
                <!-- </div> -->
                <div class="wf-flex wf-justify-center">
                    <button class="wf-outline-none wf-cursor-pointer wf-bg-pink-100 wf-rounded wf-px-6 wf-py-2 wf-text-slate-900 wf-mx-2">
                        <ArrowNarrowLeftIcon class="wf-h-4 wf-w-10 wf-text-xl wf-font-bold" />
                    </button>
                     <button class="wf-outline-none wf-cursor-pointer wf-bg-pink-100 wf-rounded wf-px-6 wf-py-2 wf-text-slate-900 wf-mx-2 wf-font-medium wf-text-base">
                        View all homes for investing
                    </button>
                    <button class="wf-outline-none wf-cursor-pointer wf-bg-pink-100 wf-rounded wf-px-6 wf-py-2 wf-text-slate-900 wf-mx-2">
                        <ArrowNarrowRightIcon class="wf-h-4 wf-w-10" />
                    </button>
                    </div>
            </section>
            <hero-card class="wf-bg-slate-700 wf-px-10 wf-py-16 wf-mt-6"></hero-card>
        </main>
    </div>
</template>

<script setup lang="ts">
    import HeaderComponent from '../components/layouts/HeaderComponent.vue';
    import TickerCard from '../components/cards/TickerCard.vue';
    import tickers from '../apis/tickers';
    import { Wallet, Bed } from 'mdue';
    import { AcademicCapIcon, LockClosedIcon, AtSymbolIcon, BadgeCheckIcon, TagIcon } from '@heroicons/vue/solid';
    import { ArrowNarrowLeftIcon, ArrowNarrowRightIcon } from '@heroicons/vue/outline';
    import FeatureCard from '../../../common/components/Cards/FeatureCard.vue';
    import FeatureSectionCards from '../../../common/components/Cards/FeatureSectionCard.vue'
    import HeroCard from '../../../common/components/Cards/HeroCard.vue'

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
    ];

    const walletFeature = [
        {
            summary: 'Buy and Sell Crypto in Minutes',
            detail: 'Instantly buy Bitcoin with credit card, debit card, or by linking your bank.',
            imgSrc: ''
        },
        {
            summary: 'Earn up to 12% in rewards',
            detail: 'Fund a Rewards Account with crypto and watch it grow.',
            imgSrc: ''
        },
        {
            summary: 'Control your funds with Private Key Wallet',
            detail: 'No one but you can access Private Key Wallets. Not even us.',
            imgSrc: ''
        },
        {
            summary: 'At home or on the go',
            detail: 'Manage your Wallet from a desktop, mobile, or both.',
            imgSrc: ''
        },
        {
            summary: 'All your crypto in one place',
            detail: 'View and manage your balance across the Wallet, the Exchange, and your hardware, all in your wallet dashboard.',
            imgSrc: ''
        }
    ];

    const whyWeAreTheBest = [
        {
            header: 'Secured and insured',
            content: 'Industry-leading security and insurance means your investment and personal info are safe.',
            icon: LockClosedIcon,
            iconColor: 'wf-text-blue-700'
        },
        {
            header: 'Invest a little, invest a lot',
            content: 'You can invest with as little as $25.',
            icon: LockClosedIcon,
            iconColor: 'wf-text-yellow-700'
        },
        {
            header: 'Base in USA',
            content: 'Our site is based in San Francisco and trusted by 100+ million customers worldwide.',
            icon: LockClosedIcon,
            iconColor: 'wf-text-blue-700'
        },
        {
            header: 'Convenient ways to invest',
            content: 'Use your debit card or connect your bank account, it\'s up to you.',
            icon: LockClosedIcon,
            iconColor: 'wf-text-green-700'
        },
        {
            header: 'Varieties of option to invest.',
            content: 'You can invest in NFTs, cryptocurrencies, real estates and stocks.',
            icon: LockClosedIcon,
            iconColor: 'wf-text-green-700'
        },
        

    ];
    $(document).ready(function() {
        $('.slick').slick({
            slideToShow: 3,
            autoplay: true,
            autoplaySpeed: 2000
        });
    })

</script>

<style scoped>
    .h-0 {
        height: 0;
    }

    .h-auto {
        height: auto;
    }
</style>