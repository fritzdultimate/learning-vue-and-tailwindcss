<template>
    <ViewWrapper>
        <div class="wf-flex wf-flex-col">
            <div class="wf-flex wf-flex-col wf-items-center">
                <h4 class="wf-text-gray-400 wf-text-base wf-font-bold wf-mb-5">BTC QR Code</h4>
                <QRCode />
                <h5 class="wf-text-base wf-text-gray-400 wf-font-bold wf-mb-3">BTC Address</h5>
            </div>
        </div>
    </ViewWrapper>
</template>

<script setup lang="ts">
    import ViewWrapper from '../partials/ViewWrapper.vue';
    import QRCode from '../../../common/components/Cards/QRCode.vue';
</script>