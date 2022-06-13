<template>
    <li class="wf-mb-3 last:wf-mb-0">
        <router-link :to="actionLink" class="wf-flex wf-border wf-border-gray-200 wf-rounded-lg wf-px-2 wf-py-2.5 wf-items-center wf-cursor-pointer hover:wf-bg-gray-100">
            <RoundedImage :bgW="'wf-w-8'" :bgH="'wf-h-8'" :class="'wf-mr-3 wf-border'" :img="icon"/>
            <span class="wf-flex wf-flex-col wf-text-gray-900/90 wf-font-bold">
                <span class="wf-text-base wf-capitalize">
                    {{ name }}
                </span>
                <span class="wf-flex wf-items-center">
                    <span class="wf-text-sm wf-pr-1">${{ balance }}</span>
                    <span class="wf-uppercase wf-text-xs wf-text-gray-400">{{ amountInCurrency }} {{ symbol }}</span>
                </span>
            </span>
            <span class="wf-ml-auto">
                <ChevronRightIcon class="wf-text-gray-500 wf-w-5 wf-h-5" />
            </span>
        </router-link>
    </li>
</template>
<script setup lang="ts">
import RoundedImage from '../Cards/RoundedImage.vue';
import { ChevronRightIcon } from '@heroicons/vue/outline';
    interface Props {
        icon: string,
        name: string,
        balance: number,
        amountInCurrency: number,
        symbol: string,
        actionLink: string
    }

    defineProps<Props>()
</script>