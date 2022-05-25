<template>
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
        <div class="wf-flex wf-w-full wf-mt-10 wf-mb-16 wf-justify-start">
            <swiper class="wf-w-full wf-h-80 swiper" :breakpoints="breakpoints" :centeredSlides="true" :centeredSlidesBounds="true" :grabCursor="true">
                <swiper-slide class="wf-h-72 wf-w-80 wf-relative wf-m-2 wf-flex wf-justify-center md:wf-justify-start">
                    <div class="wf-h-56 wf-w-80 wf-bg-yellow-200 wf-rounded-xl wf-absolute">
                        <span class="wf-rounded-full wf-bg-yellow-700 wf-text-slate-900 wf-px-6 wf-py-1 wf-font-medium wf-absolute wf-m-2">
                            Out of STC
                        </span>
                        <img src="@/assets/img/houses/house_1.png" class="wf-object-cover wf-rounded-xl wf-h-56">
                    </div>
                    <div class="wf-flex md:wf-block wf-flex-col wf-items-center wf-text-white wf-absolute wf-w-full wf-top-56 wf-mt-4">
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
                </swiper-slide>
                <swiper-slide class="wf-h-72 wf-w-80 wf-relative wf-m-2 wf-flex wf-justify-center md:wf-justify-start">
                    <div class="wf-h-56 wf-w-80 wf-bg-yellow-200 wf-rounded-xl wf-absolute">
                        <span class="wf-rounded-full wf-bg-yellow-700 wf-text-slate-900 wf-px-6 wf-py-1 wf-font-medium wf-absolute wf-m-2">
                            Out of STC
                        </span>
                        <img src="@/assets/img/houses/house_1.png" class="wf-object-cover wf-rounded-xl wf-h-56">
                    </div>
                    <div class="wf-flex md:wf-block wf-flex-col wf-items-center wf-text-white wf-absolute wf-w-full wf-top-56 wf-mt-4">
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
                </swiper-slide>
                <swiper-slide class="wf-h-72 wf-w-80 wf-relative wf-m-2 wf-flex wf-justify-center md:wf-justify-start">
                    <div class="wf-h-56 wf-w-80 wf-bg-yellow-200 wf-rounded-xl wf-absolute">
                        <span class="wf-rounded-full wf-bg-yellow-700 wf-text-slate-900 wf-px-6 wf-py-1 wf-font-medium wf-absolute wf-m-2">
                            Out of STC
                        </span>
                        <img src="@/assets/img/houses/house_1.png" class="wf-object-cover wf-rounded-xl wf-h-56">
                    </div>
                    <div class="wf-flex md:wf-block wf-flex-col wf-items-center wf-text-white wf-absolute wf-w-full wf-top-56 wf-mt-4">
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
                </swiper-slide>
                <swiper-slide class="wf-h-72 wf-w-80 wf-relative wf-m-2 wf-flex wf-justify-center md:wf-justify-start">
                    <div class="wf-h-56 wf-w-80 wf-bg-yellow-200 wf-rounded-xl wf-absolute">
                        <span class="wf-rounded-full wf-bg-yellow-700 wf-text-slate-900 wf-px-6 wf-py-1 wf-font-medium wf-absolute wf-m-2">
                            Out of STC
                        </span>
                        <img src="@/assets/img/houses/house_1.png" class="wf-object-cover wf-rounded-xl wf-h-56">
                    </div>
                    <div class="wf-flex md:wf-block wf-flex-col wf-items-center wf-text-white wf-absolute wf-w-full wf-top-56 wf-mt-4">
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
                </swiper-slide>
                <swiper-slide class="wf-h-72 wf-w-80 wf-relative wf-m-2 wf-flex wf-justify-center md:wf-justify-start">
                    <div class="wf-h-56 wf-w-80 wf-bg-yellow-200 wf-rounded-xl wf-absolute">
                        <span class="wf-rounded-full wf-bg-yellow-700 wf-text-slate-900 wf-px-6 wf-py-1 wf-font-medium wf-absolute wf-m-2">
                            Out of STC
                        </span>
                        <img src="@/assets/img/houses/house_1.png" class="wf-object-cover wf-rounded-xl wf-h-56">
                    </div>
                    <div class="wf-flex md:wf-block wf-flex-col wf-items-center wf-text-white wf-absolute wf-w-full wf-top-56 wf-mt-4">
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
                </swiper-slide>
            </swiper>
        </div>
        <div class="md:wf-flex wf-justify-center wf-hidden">
            <button class="wf-outline-none wf-cursor-pointer wf-bg-pink-100 wf-rounded wf-px-6 wf-py-2 wf-text-slate-900 wf-mx-2" @click="swiper.slidePrev()">
                <ArrowNarrowLeftIcon class="wf-h-4 wf-w-10 wf-text-xl wf-font-bold" />
            </button>
                <button class="wf-outline-none wf-cursor-pointer wf-bg-pink-100 wf-rounded wf-px-6 wf-py-2 wf-text-slate-900 wf-mx-2 wf-font-medium wf-text-base">
                View all homes for investing
            </button>
            <button class="wf-outline-none wf-cursor-pointer wf-bg-pink-100 wf-rounded wf-px-6 wf-py-2 wf-text-slate-900 wf-mx-2" @click="swiperHook.slideNext()">
                <ArrowNarrowRightIcon class="wf-h-4 wf-w-10" />
            </button>
        </div>
    </section>
    <hero-card class="wf-bg-slate-700 wf-px-2 md:wf-px-10 wf-py-8 md:wf-py-16 wf-mt-2 md:wf-mt-6"></hero-card>
    <div class="wf-flex wf-flex-col md:wf-flex-row wf-bg-white md:wf-py-0 wf-pt-2">
        <div class="wf-w-full md:wf-w-1/3 wf-flex md:wf-flex-col md:wf-px-6 wf-py-4 wf-relative wf-justify-end md:wf-justify-start wf-overflow-hidden">
            <div class="md:wf-hidden wf-w-1/3 wf-h-full wf-flex wf-justify-center wf-overflow-hidden wf-absolute wf-top-5 -wf-left-2">
                <img src="@/assets/img/tools/sell.png" class="wf-object-cover wf-w-full wf-scale-105 wf-object-right-top">
            </div>
            <div class="wf-flex wf-flex-col wf-w-2/3 md:wf-w-full wf-text-slate-900 wf-px-3">
                <h2 class="wf-text-2xl md:wf-text-4xl wf-font-bold">
                    We're the agent that not only sells your home...
                </h2>
                <p class="wf-text-base md:wf-py-6 wf-py-4">
                    <span class="wf-font-bold">Your</span> local agent will achieve the best price for your current home
                </p>
                <button class="wf-hidden md:wf-inline wf-bg-slate-800 wf-rounded-lg wf-text-xl wf-capitalize wf-font-medium wf-text-white wf-w-1/3 wf-py-4 wf-text-center">
                    selling
                </button>
            </div>
        </div>
        <div class="wf-w-full md:wf-w-1/3 wf-hidden wf-p-6 md:wf-flex wf-justify-center wf-items-center">
            <img src="@/assets/img/tools/sell-and-buy.png" class="wf-object-cover">
        </div>
        <div class="wf-w-full md:wf-w-1/3 wf-flex md:wf-flex-col md:wf-px-6 wf-py-4 wf-bg-yellow-100 md:wf-bg-inherit wf-relative wf-overflow-hidden">
            <div class="md:wf-hidden wf-w-1/3 wf-h-full wf-flex wf-justify-center wf-absolute wf-top-12 -wf-right-2">
                <img src="@/assets/img/tools/bought.png" class="wf-object-cover wf-scale-105 wf-w-full wf-object-right-top">
            </div>
            <div class="wf-flex wf-flex-col wf-w-2/3 md:wf-w-full wf-text-slate-900 wf-items-end wf-px-3 wf-text-left md:wf-text-right">
                <h2 class="wf-text-2xl md:wf-text-4xl wf-font-bold">
                    ...But also saves you thousands on your new home
                </h2>
                <p class="wf-text-base wf-py-6">
                    <span class="wf-font-bold">While</span> our buying agents help you find and negotiate the best price on your new one.
                </p>
                <button class="wf-hidden md:wf-inline wf-bg-slate-800 wf-rounded-lg wf-text-xl wf-capitalize wf-font-medium wf-text-white wf-w-1/3 wf-py-4 wf-text-center">
                    buying
                </button>
            </div>
        </div>

        <div class="wf-flex md:wf-hidden wf-justify-center wf-p-2 wf-bg-slate-700">
            <button class="wf-rounded wf-bg-white wf-text-slate-900 wf-font-bold wf-text-base wf-w-1/2 wf-text-center wf-px-6 wf-py-3 wf-m-1">Real Estate</button>
            <button class="wf-rounded wf-bg-white wf-text-slate-900 wf-font-bold wf-text-base wf-w-1/2 wf-text-center wf-px-6 wf-py-3 wf-m-1">Crypto</button>
        </div>
    </div>
    <div class="wf-flex wf-flex-col md:wf-flex-row wf-justify-center wf-items-center wf-text-slate-900 wf-bg-yellow-200 wf-p-5 md:wf-py-6 md:wf-px-14">
        <img class="wf-object-cover wf-mb-4 md:wf-mb-0" src="@/assets/img/tools/mumsnet.png">
        <div class="wf-flex wf-flex-col wf-items-center wf-text-center">
            <h3 class="wf-text-2xl md:wf-text-4xl wf-font-bold wf-p-2">
                Mum knows best
            </h3>
            <p class="wf-text-base md:wf-text-xl wf-font-bold">
                The only investment approved by Mumsnet
            </p>
        </div>
        <button class="md:wf-ml-auto wf-rounded wf-text-white wf-bg-slate-900 wf-font-medium wf-text-base wf-text-center wf-px-6 wf-py-3 md:wf-px-6 wf-my-5">Find out more</button>
    </div>

    <div class="wf-flex wf-flex-col md:wf-flex-row wf-bg-white wf-text-slate-900 wf-p-4 md:wf-p-6">
        <div class="wf-w-full md:wf-w-1/2 wf-order-first md:wf-order-last">
            <img src="@/assets/img/tools/pupil-selling.png" class="wf-object-cover wf-scale-105 wf-w-full wf-object-right-top wf-mb-5 md:wf-mb-0">
        </div>
        <div class="wf-w-full md:wf-w-1/2 wf-order-last md:wf-order-first wf-flex wf-flex-col md:wf-items-start wf-items-center wf-text-center md:wf-text-left md:wf-px-12">
            <h3 class="wf-text-2xl md:wf-text-5xl wf-font-bold wf-py-3">
                Smart investing at your fingertips
            </h3>
            <p class="wf-text-sm md:wf-text-base wf-pt-6">
                The platform gives you access to everything you need to know about the investment.
            </p>

            <p class="wf-text-sm md:wf-text-base wf-py-6">
                Keep up to date with your viewing calendar, view detailed feedback from interested investors, then review offers as they come in
            </p>

            <button class="wf-rounded wf-bg-gray-200 wf-text-slate-900 wf-font-medium wf-text-base wf-text-center wf-px-6 wf-py-3 md:wf-px-6 wf-mb-5">Find out more</button>
        </div>
    </div>

    <div class="wf-flex wf-flex-col md:wf-flex-row wf-bg-white wf-text-slate-900 wf-p-4 md:wf-p-6">
        <div class="wf-w-full md:wf-w-1/2">
            <img src="@/assets/img/tools/house-smart-selling.png" class="wf-object-cover wf-scale-105 wf-w-full wf-object-right-top wf-mb-5 md:wf-mb-0">
        </div>
        <div class="wf-w-full md:wf-w-1/2 wf-flex wf-flex-col md:wf-items-start wf-items-center wf-text-center md:wf-text-left md:wf-px-12">
            <h3 class="wf-text-2xl md:wf-text-5xl wf-font-bold md:wf-py-3">
                Same great service, with safety in mind
            </h3>
            <p class="wf-text-sm md:wf-text-base wf-pt-6">
                Ensuring the safety of our sellers, buyers, and agents is our number one priority during the Coronavirus pandemic.
            </p>

            <p class="wf-text-sm md:wf-text-base wf-py-6">
                From virtual valuations to 3D virtual tours, Nested will find you a buyer whatever the world throws at us.
            </p>

            <button class="wf-rounded wf-bg-gray-200 wf-text-slate-900 wf-font-medium wf-text-base wf-text-center wf-px-6 wf-py-3 md:wf-px-6 wf-mb-5">How safe we are</button>
        </div>
    </div>
    <div class="wf-flex wf-flex-col md:wf-bg-yellow-100 wf-bg-white wf-text-slate-900 md:wf-px-20 md:wf-pt-6 wf-items-center">
        <div class="wf-w-full wf-flex wf-justify-center wf-px-4 wf-py-4 md:wf-px-24">
            <div class="wf-text-center">
                <h1 class="wf-text-2xl md:wf-text-4xl wf-font-bold">
                    Always invest, no fee
                </h1>
                <p class="wf-text-base wf-py-3 wf-font-medium">
                    How our platform stacks up against other investment platforms
                </p>
            </div>
            <img src="@/assets/img/tools/bark-dog.png" class="wf-hidden md:wf-block wf-ml-auto wf-object-cover wf-scale-105 wf-w-full wf-object-right-top wf-mb-5 md:wf-mb-0">
        </div>
        <div class="wf-p-4 wf-bg-white wf-rounded-t-xl md:wf-p-20 md:wf-mx-20">
            <table class="wf-border-collapse wf-table-fixed wf-w-full">
                <thead>
                    <tr>
                        <th class="wf-font-medium wf-h-[100px] wf-text-left wf-whitespace-nowrap wf-relative wf-text-base">
                            <div class="wf-absolute wf-bottom-[20px] wf-left-0">
                                Features
                            </div>
                        </th>
                        <th class="wf-font-medium wf-h-[100px] wf-text-left wf-whitespace-nowrap wf-relative wf-text-sm wf-w-[50px] md:wf-p-8 md:wf-whitespace-normal md:wf-text-center">
                            <div class="-wf-rotate-[45deg] md:wf-rotate-0 wf-absolute wf-bottom-[15px] wf-left-0" style="transform-origin: 0px 0px;">
                                Our Platform
                            </div>
                        </th>
                        <th class="wf-font-medium wf-h-[100px] wf-text-left wf-whitespace-nowrap wf-relative wf-text-sm wf-w-[50px] md:wf-p-8 md:wf-whitespace-normal md:wf-text-center">
                            <div class="-wf-rotate-[45deg] md:wf-rotate-0 wf-absolute wf-bottom-[15px] wf-left-2" style="transform-origin: 0px 0px;">
                                Saxo
                            </div>
                        </th>
                        <th class="wf-font-medium wf-h-[100px] wf-text-left wf-whitespace-nowrap wf-relative wf-text-sm wf-w-[50px] md:wf-p-8 md:wf-whitespace-normal md:wf-text-center">
                            <div class="-wf-rotate-[45deg] md:wf-rotate-0 wf-absolute wf-bottom-[15px] wf-left-0" style="transform-origin: 0px 0px;">
                                Others
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="wf-border-t-gray-300 wf-border-t wf-h-14 md:wf-h-16">
                        <td class="wf-py-3 wf-text-base wf-relative wf-text-left">
                            Variety Investment option
                        </td>
                        <td class="wf-text-center">
                            <CheckIcon class="wf-text-green-400 wf-w-8 wf-h-8" />
                        </td>
                        <td class="wf-text-center">
                            <XIcon class="wf-text-gray-300 wf-w-8 wf-h-8" />
                        </td>
                        <td class="wf-text-center">
                            <XIcon class="wf-text-gray-300 wf-w-8 wf-h-8" />
                        </td>
                    </tr>
                    <tr class="wf-border-t-gray-300 wf-border-t wf-h-14 md:wf-h-16">
                        <td class="wf-py-3 wf-text-base wf-relative wf-text-left">
                            Invest, no fee
                        </td>
                        <td class="wf-text-center">
                            <CheckIcon class="wf-text-green-400 wf-w-8 wf-h-8" />
                        </td>
                        <td class="wf-text-center">
                            <CheckIcon class="wf-text-green-400 wf-w-8 wf-h-8" />
                        </td>
                        <td class="wf-text-center">
                            <XIcon class="wf-text-gray-300 wf-w-8 wf-h-8" />
                        </td>
                    </tr>
                    <tr class="wf-border-t-gray-300 wf-border-t wf-h-14 md:wf-h-16">
                        <td class="wf-py-3 wf-text-base wf-relative wf-text-left">
                            Special investment offers
                        </td>
                        <td class="wf-text-center">
                            <CheckIcon class="wf-text-green-400 wf-w-8 wf-h-8" />
                        </td>
                        <td class="wf-text-center">
                            <XIcon class="wf-text-gray-300 wf-w-8 wf-h-8" />
                        </td>
                        <td class="wf-text-center">
                            <XIcon class="wf-text-gray-300 wf-w-8 wf-h-8" />
                        </td>
                    </tr>
                    <tr class="wf-border-t-gray-300 wf-border-t wf-h-14 md:wf-h-16">
                        <td class="wf-py-3 wf-text-base wf-relative wf-text-left">
                            Online dashboard
                        </td>
                        <td class="wf-text-center">
                            <CheckIcon class="wf-text-green-400 wf-w-8 wf-h-8" />
                        </td>
                        <td class="wf-text-center">
                            <CheckIcon class="wf-text-green-400 wf-w-8 wf-h-8" />
                        </td>
                        <td class="wf-text-center">
                            <CheckIcon class="wf-text-green-400 wf-w-8 wf-h-8" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    <div class="wf-flex wf-flex-col md:wf-flex-row wf-justify-start wf-bg-slate-900 wf-py-4 md:wf-px-24 md:wf-p-12">
        <div class="wf-w-full md:wf-w-1/2 wf-p-6 md:wf-p-3">
            <img src="@/assets/img/tools/about-us.png" class="wf-object-cover wf-w-full wf-object-right-top wf-mb-5 md:wf-mb-0">
        </div>
        <div class="wf-w-full md:wf-w-1/2 wf-text-gray-200 wf-px-2 md:wf-px-12 wf-text-center md:wf-text-left">
            <h3 class="wf-font-bold wf-text-2xl md:wf-text-4xl wf-leading-10">
                An investment fit for the 21st Century
            </h3>
            <p class="wf-text-base wf-py-4 wf-font-normal">
                Making your next step on the investment choice exciting, But the reality is often stress and uncertainty. At our platform we're building a better way.
            </p>
            <p class="wf-text-base wf-py-4 wf-font-normal">
                Making your next step on the investment choice exciting, But the reality is often stress and uncertainty. At our platform we're building a better way.
            </p>
            <p class="wf-text-base wf-py-4 wf-font-normal">
                Making your next step on the investment choice exciting, But the reality is often stress and uncertainty. At our platform we're building a better way.
            </p>
            <button class="wf-rounded wf-bg-gray-200 wf-text-slate-900 wf-font-medium wf-text-base wf-text-center wf-px-6 wf-py-3 md:wf-px-6 wf-mb-5">About us</button>
        </div>
    </div>

    <div class="wf-flex wf-flex-col wf-w-full wf-justify-center wf-bg-white">
        <div class="wf-m-3 wf-flex wf-flex-col wf-items-center wf-p-6">
            <img src="">
            <h4 class="wf-text-xl wf-text-slate-900">
                Rated <strong class="wf-font-medium">excellent</strong> by investors on
            </h4>
            <img src="">
        </div>
        <swiper class="wf-w-full wf-flex wf-mx-3" :breakpoints="breakpoints" :grabCursor="true">
            <swiper-slide v-for="i in 12" :key="i">
                <div class="wf-h-48, wf-rounded-xl wf-bg-white wf-text-slate-700 wf-text-sm wf-flex wf-flex-col wf-items-center wf-shadow-xl wf-px-5 wf-py-6 wf-mx-2 wf-my-3">
                    <p>
                        "Great service, great people. Everyone I spoke to and dealth with offered a great value, great people. Everyone I spoke to and dealth with offered a great value, great people. Everyone I spoke to and dealth with offered a great value"
                    </p>
                    <div class="wf-inline-flex wf-flex-row wf-p-4 wf-text-left wf-relative">
                        <div class="wf-font-bold wf-text-base wf-mr-28 ">V patrick</div>
                        <div class="wf-font-bold wf-text-base">rate</div>
                        <img src="">
                    </div>
                </div>
            </swiper-slide>
        </swiper>
        <div class="md:wf-flex wf-justify-center wf-hidden wf-my-6">
                <button class="wf-outline-none wf-cursor-pointer wf-bg-gray-300 wf-rounded wf-px-6 wf-py-2 wf-text-slate-900 wf-mx-2 wf-font-medium wf-text-base">
                see all reviews
            </button>
        </div>
    </div>
    <div class="wf-flex wf-flex-col wf-justify-center wf-items-center wf-bg-slate-900 wf-py-10 wf-px-5">
        <div class="wf-h-[120px] wf-my-0 wf-mx-5 wf-relative wf-w-[101px] wf-bg-yellow-100 wf-rounded-tr-[70px] wf-rounded-tl-[70px]">
            <img class="wf-w-[125px] wf-absolute wf-top-5 -wf-left-2 wf-scale-[1.3]" src="@/assets/img/tools/weigh.png">
        </div>
        <h3 class="wf-text-2xl wf-font-bold wf-text-white wf-whitespace-pre-wrap wf-font-[StriverText] wf-text-center wf-mt-5 md:wf-w-[45%] md:wf-text-4xl">
            Subscribe to our news channel today
        </h3>
        <div class="wf-text-center md:wf-w-[45%]">
            <p class="wf-text-base md:wf-text-xl wf-text-gray-200 wf-mt-5 wf-font-[Euclid]">
                Keep in touch with us through our news channel, be among the first to receive our mouth watery offers directly through your mail box, no-obligation valuation.
            </p>
        </div>
        <form class="wf-relative wf-mt-7 wf-w-full wf-max-w-[290px]">
            <div class="wf-relative wf-bg-white wf-rounded-lg">
                <div>
                    <input type="text" class="wf-text-gray-700 wf-appearance-none wf-overflow-ellipsis wf-bg-white wf-w-full wf-text-base wf-py-5 wf-pr-[130px] wf-pl-3 wf-rounded wf-outline-none wf-placeholder-gray-400" placeholder="Enter email address">
                </div>
                <div class="wf-absolute wf-inline-block wf-right-2 wf-bottom-[15px] wf-h-[36px]">
                    <button class="wf-py-2 wf-px-4 wf-text-base wf-rounded wf-border-none wf-inline-block wf-font-bold wf-h-10m wf-cursor-pointer wf-select-none wf-bg-yellow-500 wf-text-gray-800 wf-capitalize">subscribe</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script setup lang="ts">
    import TickerCard from '../components/cards/TickerCard.vue';
    import tickers from '../apis/tickers';
    import { Wallet, Bed } from 'mdue';
    import { AcademicCapIcon, LockClosedIcon, AtSymbolIcon, BadgeCheckIcon, TagIcon, CheckIcon, XIcon } from '@heroicons/vue/solid';
    import { ArrowNarrowLeftIcon, ArrowNarrowRightIcon } from '@heroicons/vue/outline';
    import FeatureCard from '../../../common/components/Cards/FeatureCard.vue';
    import FeatureSectionCards from '../../../common/components/Cards/FeatureSectionCard.vue'
    import HeroCard from '../../../common/components/Cards/HeroCard.vue'
    import {onMounted } from 'vue';
    import { Swiper, SwiperSlide, useSwiper } from 'swiper/vue';
    import 'swiper/css';

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

    const breakpoints = {
        320: {
            slidesPerView: 1,
            // spaceBetween: 20
        },
        480: {
            slidesPerView: 2,
            // spaceBetween: 20
        },
        640: {
            slidesPerView: 4,
            // spaceBetween: 20
        }
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