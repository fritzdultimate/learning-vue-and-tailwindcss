<template>
    <ViewWrapper>
        <div class="wf-flex wf-flex-col">
            <div class="wf-flex wf-flex-col wf-items-center">
                <h4 class="wf-text-gray-400 wf-text-base wf-font-bold wf-mb-5">BTC QR Code</h4>
                <QRCode value="val" class="wf-mb-5" size="150" level="Q"/>
                <h5 class="wf-text-base wf-text-gray-400 wf-font-bold wf-mb">BTC Address</h5>
                <div class="wf-text-gray-700 wf-font-medium wf-text-xs md:wf-text-xl wf-border-b wf-border-b-gray-900 wf-mb-5">
                    bciderjxcvbnsieodhfnbsdkeioepsaldoexdms
                </div>
                <button class="wf-text-white wf-bg-yellow-600 wf-w-full wf-rounded-full wf-py-3 wf-font-medium wf-text-base md:wf-text-xl wf-capitalize wf-shadow hover:wf-bg-yellow-700 hover:wf-ring hover:wf-ring-yellow-600 hover:wf-text-gray-100 wf-transition wf-duration-300">Copy BTC Address</button>
            </div>

            <WalletHistory class="wf-mt-5"/>

            <button class="wf-text-white wf-bg-yellow-600 wf-w-full wf-rounded-lg wf-mt-5 wf-py-3 wf-font-medium wf-text-base md:wf-text-xl wf-capitalize wf-shadow hover:wf-bg-yellow-700 hover:wf-ring hover:wf-ring-yellow-600 hover:wf-text-gray-100 wf-transition wf-duration-300">Invest In Bitcoin</button>
        </div>
    </ViewWrapper>
</template>

<script setup lang="ts">
    import ViewWrapper from '../partials/ViewWrapper.vue';
    import QRCode from '../../../common/components/Cards/QRCode.vue';
    import WalletHistory from '../../../common/components/Cards/WalletHistory.vue';
</script>