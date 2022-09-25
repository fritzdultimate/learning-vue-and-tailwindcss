<template>
    <ViewWrapper>
        <div class="wf-flex wf-items-center wf-h-5 wf-w-full wf-bg-green-600">
            <svg class="wf-animate-spin wf-ml-3 wf-mr-3 wf-h-4 wf-w-4 wf-text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="wf-opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="wf-opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span class="wf-text-white wf-text-xs wf-font-medium">Awaiting Payment...</span>
            <span class="wf-text-white wf-text-xs wf-font-medium wf-ml-auto wf-mr-3">5:14:50</span>
        </div>

        <div class="wf-flex wf-items-center wf-h-8 wf-w-full wf-bg-gray-50/90 wf-border-b wf-border-b-gray-300">
            <span class="wf-text-gray-900 wf-text-xs wf-font-bold wf-ml-3">Pay with</span>
            <span class="wf-text-gray-900 wf-text-xs wf-font-medium wf-ml-auto wf-mr-3">Bitcoin (BTC)</span>
        </div>
        <div class="wf-flex wf-items-center wf-w-full wf-bg-gray-50/90 wf-border-b wf-border-b-gray-300 wf-py-3">
            <span class="wf-text-gray-900 wf-text-xs wf-font-bold wf-ml-3">spacearn.com</span>
            <span class="wf-flex wf-flex-col wf-text-right wf-text-gray-900 wf-text-xs wf-font-medium wf-ml-auto wf-mr-3">
                <span class="">0.00053053 BTC</span>
                <span class="wf-text-[10px] wf-italic wf-font-sans">1 BTC = $18,885.30 (USD)</span>
            </span>
        </div>

        <div class="wf-flex wf-shadow wf-h-10">
            <div class="wf-w-1/2 wf-bg-gray-100 wf-flex wf-items-center wf-text-sm wf-justify-center wf-text-gray-500 wf-font-medium wf-border-b-green-600 wf-border-b-2">Scan</div>
            <div class="wf-w-1/2 wf-flex wf-items-center wf-text-sm wf-justify-center wf-text-gray-500 wf-font-medium">Copy</div>
        </div>
    </ViewWrapper>
</template>

<script setup lang="ts">
import ViewWrapper from '../partials/ViewWrapper.vue';
import MobileKeyPad from '../../../common/components/Cards/MobileKeyPad.vue';
import { onBeforeMount, onMounted, ref, watch, reactive, customRef, computed } from 'vue';
import topbar from '../../../plugins/topbar';
import { ChevronDownIcon, ChevronRightIcon, BackspaceIcon } from '@heroicons/vue/solid';
import { SwitchVerticalIcon, DotsHorizontalIcon } from '@heroicons/vue/outline';

onBeforeMount(() => topbar.show())
onMounted(() => topbar.hide())

</script>