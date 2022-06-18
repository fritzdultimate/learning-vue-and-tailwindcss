<template>
    <ViewWrapper>
        <div class="wf-flex wf-flex-col">
            <div class="wf-mb-10">
                <RoundedImage :bgW="'wf-w-8'" :bgH="'wf-h-8'"/>
            </div>

            <div class="wf-flex wf-flex-col wf-items-center wf-mb-5">
                <span class="wf-text-gray-800 wf-font-bold wf-text-base wf-flex wf-items-end">
                    <span class="wf-mr-2 wf-text-4xl md:wf-text-5xl">102,782</span>
                    <span class="wf-text-xl wf-font-medium wf-text-gray-500">LTC</span>
                </span>

                 <div class="wf-flex wf-mt-3 wf-font-medium wf-text-xl wf-mb-5">
                    <span class="wf-mr-3 wf-text-gray-600">$109.03</span>
                    <span class="wf-text-green-700 wf-font-bold">+0.03%</span>
                </div>
            </div>

            <div class="wf-flex wf-justify-center">
                <router-link to="/app/space/user/send" class="wf-flex wf-justify-center wf-bg-transparent wf-border wf-border-gray-300 wf-rounded-full wf-px-8 wf-py-2 wf-capitalize wf-font-bold wf-text-gray-800 wf-items-center wf-mr-3 hover:wf-bg-gray-100 wf-transition wf-duration-300">
                    <UploadIcon class="wf-w-4 wf-h-4 wf-mr-2" />
                    send
                </router-link>
                <router-link to="/app/space/user/receive" class="wf-flex wf-justify-center wf-bg-transparent wf-border wf-border-gray-300 wf-rounded-full wf-px-5 wf-py-2 wf-capitalize wf-font-bold wf-text-gray-800 wf-items-center wf-mr-3 hover:wf-bg-gray-100 wf-transition wf-duration-300">
                    <DownloadIcon class="wf-w-4 wf-h-4 wf-mr-2" />
                    Received
                </router-link>
            </div>
            <WalletHistory class="wf-mt-5"/>
        </div>
    </ViewWrapper>
</template>

<script setup lang="ts">
    import ViewWrapper from '../partials/ViewWrapper.vue';
    import RoundedImage from '../../../common/components/Cards/RoundedImage.vue';
    import WalletHistory from '../../../common/components/Cards/WalletHistory.vue';
    import { UploadIcon, DownloadIcon } from '@heroicons/vue/solid';

</script>