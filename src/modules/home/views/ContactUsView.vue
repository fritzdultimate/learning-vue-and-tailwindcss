<template>
    <div class="wf-bg-white wf-py-4 md:wf-py-8">
        <div class="wf-px-10 wf-w-full wf-max-w-[1200px] wf-mx-auto">
            <div class="wf-flex">
                <h5 class="wf-text-2xl wf-text-gray-900 wf-font-medium wf-mb-6">
                    Help
                </h5>
                <div class="wf-text-2xl wf-text-gray-900 wf-font-medium wf-mb-6 wf-flex wf-ml-auto">
                    <h5 class="wf-pr-5" v-for="(item, i) in otherHelpOptions" :key="i">
                        {{ item }}
                    </h5>
                </div>
            </div>
            <form class="wf-bg-white wf-rounded-[36px] wf-border wf-border-gray-500 wf-flex wf-h-16 wf-pl-2 wf-pr-1">
                <div class="wf-flex wf-justify-center wf-items-center wf-grow">
                    <SearchIcon class="wf-w-8 md:wf-w-10 wf-h-8 md:wf-h-10 wf-mx-2 md:wf-mx-4 wf-text-gray-500 wf-cursor-pointer" />
                    <input type="text" v-model="search" name="support-help" placeholder="What are you looking for?" class="wf-w-full wf-h-full wf-py-4 wf-px-4 md:wf-pr-1 md:wf-pl-2 wf-border-0 wf-font-medium wf-text-xl wf-outline-0 wf-bg-transparent" @keyup="toggleClearBtn">
                    <XIcon v-if="search" class="wf-w-8 md:wf-w-10 wf-h-8 md:wf-h-10 wf-mx-2 md:wf-mx-4 wf-text-gray-400 wf-cursor-pointer wf-transition-all" @click="clearSearchBox"/>
                </div>
            </form>
        </div>

        <div class="wf-flex wf-mt-10 wf-px-10 wf-mx-auto wf-max-w-[1200px] wf-w-full">
            <div class="wf-w-full md:wf-w-3/4">
                <div class="">
                    <h1 class="wf-text-3xl md:wf-text-5xl wf-font-bold">
                        We're here to help
                    </h1>
                    <p class="wf-mb-3 wf-mt-5 wf-text-base wf-px-4 wf-font-medium">
                        Explore our 
                        <router-link class="wf-text-yellow-500 hover:wf-text-yellow-700 hover:wf-underline" to="#">
                            Spacearn Help Center
                        </router-link> 
                        for quick solutions to most questions. 
                    </p>
                    <p class="wf-mb-4 wf-text-base wf-px-4 wf-font-medium">
                        If you prefer to chat with a member of our support team, please reach out by phone, live messenger, or fill out the form below.
                    </p>
                </div>

                <div class="wf-mt-10">
                    <h4 class="wf-text-3xl wf-text-cyan-900 wf-font-bold">
                        Email us
                    </h4>
                    <p class="wf-inline-block wf-relative after:wf-absolute after:wf-top-0 after:-wf-right-2 after:wf-content-['*'] after:wf-text-red-500 after:wf-font-bold wf-text-slate-700 wf-font-bold">
                        Choose your product
                    </p>
                </div>

                <section class="wf-flex wf-mt-10 wf-flex-wrap wf-w-full wf-pr-20">
                    <div class="wf-w-1/2 md:wf-w-1/3" v-for="i in 6" :key="i">
                        <label :for="i" class="wf-flex wf-flex-col wf-items-center wf-justify-center wf-mr-3 wf-mb-3 wf-border wf-border-gray-300 wf-rounded wf-h-56 wf-cursor-pointer hover:wf-bg-gray-100">
                            <figure class="wf-rounded-[50%] wf-relative wf-w-20 wf-h-20 wf-mx-auto wf-mb-0 wf-shadow-md wf-shadow-gray-400">
                                <img src="@/assets/img/tools/spacearn-other-dot.svg" class="wf-w-full wf-h-auto wf-object-cover wf-rounded-[50%]">
                            </figure>
                            <span class="wf-text-sm md:wf-text-base wf-text-slate-900 wf-text-center wf-my-2 wf-font-medium">Spacearn</span>
                            <span class="wf-text-sm wf-text-gray-500 wf-text-center wf-px-10">
                                Buy, Sell, Cryptocurrency, NFTs, Stocks, Real estate, Investment
                            </span>
                            <input type="radio" :value="i" :id="i" v-model="product" class="wf-mt-2">
                        </label>
                    </div>
                    <div class="wf-w-full wf-flex wf-flex-col">
                        <div>
                            <label class="wf-relative wf-text-slate-700 wf-font-bold">
                                Let's get started<span class="wf-text-red-500 wf-font-bold"> *</span>
                            </label>
                            <select v-model="getStated" class="wf-block wf-w-full wf-h-16 wf-border wf-border-gray-400 wf-bg-gray-100 wf-rounded wf-outline-0 wf-text-gray-800 wf-appearance-none wf-px-10 wf-font-medium" aria-label="getting started selection">
                                <option disabled value="">Select an option</option>
                                <option>
                                    Aswoooore
                                </option>
                            </select>
                        </div>
                        <div>
                            <label class="wf-relative wf-text-slate-700 wf-font-bold">
                                What is your issue about?<span class="wf-text-red-500 wf-font-bold"> *</span>
                            </label>
                            <select v-model="getStated" class="wf-block wf-w-full wf-h-16 wf-border wf-border-gray-400 wf-bg-gray-100 wf-rounded wf-outline-0 wf-text-gray-800 wf-appearance-none wf-px-10 wf-font-medium" aria-label="getting started selection">
                                <option disabled value="">Select an option</option>
                                <option>
                                    Aswoooore
                                </option>
                            </select>
                        </div>
                        <div>
                            <label class="wf-relative wf-text-slate-700 wf-font-bold">
                                What seems to be the problem?<span class="wf-text-red-500 wf-font-bold"> *</span>
                            </label>
                            <select v-model="getStated" class="wf-block wf-w-full wf-h-16 wf-border wf-border-gray-400 wf-bg-gray-100 wf-rounded wf-outline-0 wf-text-gray-800 wf-appearance-none wf-px-10 wf-font-medium" aria-label="getting started selection">
                                <option disabled value="">Select an option</option>
                                <option>
                                    Aswoooore
                                </option>
                            </select>
                        </div>

                        <div class="wf-mt-10">
                            <label class="wf-relative wf-text-slate-700 wf-font-bold">
                                Email address associated with your Spacearn account
                                <span class="wf-text-red-500 wf-font-bold"> *</span>
                            </label>
                            <input type="email" v-model="getStated" class="wf-block wf-w-full wf-h-16 wf-border wf-border-gray-400 wf-bg-white wf-rounded wf-outline-0 wf-text-gray-800 wf-appearance-none wf-px-10 wf-font-medium">
                        </div>
                        <div class="wf-mt-6">
                            <label class="wf-relative wf-text-slate-700 wf-font-bold">
                                Subject
                                <span class="wf-text-red-500 wf-font-bold"> *</span>
                            </label>
                            <input type="email" v-model="getStated" class="wf-block wf-w-full wf-h-16 wf-border wf-border-gray-400 wf-bg-white wf-rounded wf-outline-0 wf-text-gray-800 wf-appearance-none wf-px-10 wf-font-medium">
                        </div>
                        <div class="wf-mt-6">
                            <label class="wf-relative wf-text-slate-700 wf-font-bold">
                                Message
                                <span class="wf-text-red-500 wf-font-bold"> *</span>
                            </label>
                            <textarea v-model="getStated" class="wf-block wf-w-full wf-h-16 wf-border wf-border-gray-400 wf-bg-white wf-rounded wf-outline-0 wf-text-gray-800 wf-appearance-none wf-px-10 wf-font-medium wf-columns-5"></textarea>
                        </div>
                        <p class="wf-pt-2 wf-pb-6 wf-text-gray-400 wf-font-medium wf-text-sm wf-w-2/3">
                            To protect your privacy, please ensure you are not providing any personal identifying information when submitting this request. 
                        </p>
                        <div class="">
                            <button class="wf-my-5 wf-rounded wf-bg-yellow-700 wf-inline wf-py-2 wf-px-5 wf-text-white wf-text-base wf-font-bold wf-capitalize">
                                send verification email
                            </button>
                        </div>
                    </div>
                </section>
                <p class="wf-mb-3 wf-mt-10 wf-text-base wf-font-medium wf-hidden">
                    To get in touch with Spacearn Custody, please visit our custody and find our contact information.
                </p>
            </div>
            <div class="wf-w-full md:wf-w-1/4"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
    // import { HomeSearch, SearchWeb, MapSearch, SelectSearch } from 'mdue';
    import { SearchIcon, XIcon } from '@heroicons/vue/solid'
    import { ref, computed } from 'vue';

    const search = ref('');
    function clearSearchBox() {
        search.value = '';
    }

    const otherHelpOptions = [
        "FAQs",
        "Support"
    ]

    const product = ref('');
    const getStated = ref('')


</script>