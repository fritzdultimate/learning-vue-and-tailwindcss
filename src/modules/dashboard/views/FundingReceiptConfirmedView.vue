<template>
    <ViewWrapper :visibleHeader="false">
        <section class="wf-flex wf-flex-col wf-justify-center">
            <div class="wf-flex wf-items-center wf-h-5 wf-w-full wf-bg-green-700">
                <span class="wf-text-white wf-text-xs wf-font-medium wf-ml-3">Payment Confirmed</span>
                <span class="wf-text-white wf-text-xs wf-font-medium wf-ml-auto wf-mr-3">26 Sept, 2022. 12:00 AM</span>
            </div>

            <div class="wf-flex wf-items-center wf-h-8 wf-w-full wf-bg-gray-50/90 wf-border-b wf-border-b-gray-300">
                <span class="wf-text-gray-900 wf-text-xs wf-font-bold wf-ml-3">Paid with</span>
                <span class="wf-text-gray-900 wf-text-xs wf-font-medium wf-ml-auto wf-mr-3">Bitcoin (BTC)</span>
            </div>
            <div class="wf-flex wf-items-center wf-w-full wf-bg-gray-50/90 wf-border-b wf-border-b-gray-300 wf-py-3">
                <span class="wf-text-gray-900 wf-text-xs wf-font-bold wf-ml-3">spacearn.com</span>
                <span class="wf-flex wf-flex-col wf-text-right wf-text-gray-900 wf-text-xs wf-font-medium wf-ml-auto wf-mr-3">
                    <span class="">0.00053053 BTC</span>
                    <span class="wf-text-[10px] wf-italic wf-font-sans">1 BTC = $18,885.30 (USD)</span>
                </span>
            </div>

            <figure class="wf-flex wf-justify-center wf-items-center wf-mb-2">
                <img src="@/assets/img/animated/basic-trophy.gif" class="wf-w-80 wf-h-80">
            </figure>

            <div class="wf-flex wf-justify-center wf-mt-10">
                <ActionBtn class="wf-w-full wf-mx-10 wf-bg-green-600">View Transaction</ActionBtn>
            </div>
        </section>
    </ViewWrapper>
</template>

<script setup lang="ts">
import QRCode from '@/common/components/Cards/QRCode.vue';
import ActionBtn from '@/common/components/Form/ActionBtn.vue';
import ViewWrapper from '../partials/ViewWrapper.vue';
import MobileKeyPad from '../../../common/components/Cards/MobileKeyPad.vue';
import { onBeforeMount, onMounted, ref, watch, reactive, customRef, computed } from 'vue';
import topbar from '../../../plugins/topbar';
import { ChevronDownIcon, ChevronRightIcon, BackspaceIcon } from '@heroicons/vue/solid';
import { SwitchVerticalIcon, DotsHorizontalIcon } from '@heroicons/vue/outline';

onBeforeMount(() => topbar.show())
onMounted(() => topbar.hide())

</script>