<template>
    <div class="wf-flex wf-flex-col">
        <div class="wf-flex wf-flex-col wf-border-b wf-border-b-gray-200 wf-pb-2 wf-mb-5">
            <h3 class="wf-text-base wf-text-gray-800 wf-font-bold wf-mb-2">
                Transaction Details
            </h3>
            <div class="wf-flex">
                <span class="wf-bg-orange-100 wf-text-orange-500 wf-font-medium wf-text-xs md:wf-text-sm wf-px-2 wf-py-1 wf-rounded wf-mr-2 wf-flex">
                    Private Transaction
                    <InformationCircleIcon class="wf-ml-1 wf-w-4 wf-h-4" />
                </span>
                <span class="wf-bg-blue-100 wf-text-blue-500 wf-font-medium wf-text-xs md:wf-text-sm wf-px-2 wf-py-1 wf-rounded wf-mr-2">Spacearn</span>
            </div>
        </div>
        <div class="">
            <ul class="wf-flex wf-flex-col">
                <TransactionDetailLine v-for="detail in details" v-bind="detail" :key="detail.title"/>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
    import TransactionDetailLine from './TransactionDetailLine.vue';
    import { InformationCircleIcon, ClipboardIcon } from '@heroicons/vue/solid';

    defineProps<{details}>();
</script>