<template>
    <div class="wf-flex wf-flex-col">
        <div class="wf-relative wf-w-full wf-mb-10 md:wf-mb-20">
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
                {{ header }}
            </span>
            <span class="wf-text-gray-700 wf-text-2xl wf-font-bold">
                {{ headerValue }}
            </span>
            <span class="wf-text-gray-500 wf-text-base wf-font-medium wf-capitalize">
                {{ subheader }}
            </span>
        </div>

        <div class="wf-flex wf-flex-col wf-mb-5">
            <span class="wf-text-xl wf-font-bold wf-capitalize wf-mb-3">
                {{ title }}
            </span>
            <div>
                <ul class="wf-flex wf-flex-col">
                    <WalletInline v-for="wallet in fiteredWllets" :key="wallet.symbol" v-bind="wallet"/>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import WalletInline from './WalletInline.vue';
    import { SearchIcon, ChevronRightIcon } from '@heroicons/vue/outline';
    import { ref, computed } from 'vue';

    interface Props {
        wallets,
        title: string,
        header: string,
        headerValue,
        subheader: string,
    }
    const props = defineProps<Props>();

    const searchValue = ref('');

    const fiteredWllets = computed(() => props.wallets.filter(el => el.name.indexOf(searchValue.value.toLowerCase()) != -1 || el.symbol.indexOf(searchValue.value.toLowerCase()) != -1))

    const searchBox = ref(false);



</script>