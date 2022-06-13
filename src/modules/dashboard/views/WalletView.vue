<template>
    <ViewWrapper>
        <div class="wf-flex wf-flex-col">
            <div class="wf-flex wf-flex-col wf-justify-center wf-items-center">
                <div class="wf-flex wf-items-center">
                    <span class="wf-text-gray-400 wf-text-2xl wf-font-medium wf-mt-3 wf-font-mono">$</span>
                    <span class="wf-text-gray-500 wf-text-5xl wf-font-bold">1087.90</span>
                </div>
                <div class="wf-flex wf-mt-3 wf-text-green-600 wf-font-medium wf-text-xl wf-mb-5">
                    <span class="wf-mr-3">+$1.03</span>
                    <span class="">0.03%</span>
                </div>

                <div class="wf-flex wf-w-full wf-justify-cente wf-mb-5">
                    <div class="wf-w-1/2 wf-pr-2">
                        <router-link to="#" class="wf-block wf-w-full wf-rounded-md wf-text-gray-200 wf-text-center wf-bg-green-700 wf-py-2 wf-font-medium">
                            Receive
                        </router-link>
                    </div>
                    <div class="wf-w-1/2 wf-pl-2">
                        <router-link to="#" class="wf-block wf-w-full wf-rounded-md wf-text-gray-200 wf-text-center wf-bg-red-700 wf-py-2 wf-font-medium">
                            Send
                        </router-link>
                    </div>
                </div>
            </div>
            <WalletList title="crypto wallets" :wallets="wallets" header="balance" :headerValue="'$5130.65'" subheader="6 crypto investments"/>
        </div>
    </ViewWrapper>
</template>

<script setup lang="ts">
    import ViewWrapper from '../partials/ViewWrapper.vue';
    import WalletList from '../../../common/components/list/WalletList.vue';
    import ListTile from '../../../common/components/list/ListTile.vue';
    import ListTileWrapper from '../../../common/components/list/ListTileWrapper.vue';
    import { onBeforeMount, onMounted, ref } from 'vue';
    import topbar from '../../../plugins/topbar';

    onBeforeMount(() => topbar.show())
    onMounted(() => topbar.hide())

    const wallets = [
    {
        name: 'bitcoin',
        symbol: 'btc',
        balance: 234.54,
        amountInCurrency: 0.00256,
        icon: '',
        actionLink: '/app/space/user/wallet/preview'
    },
    {
        name: 'ethereum',
        symbol: 'eth',
        balance: 575.54,
        amountInCurrency: 0.256,
        icon: '',
        actionLink: '#'
    },
    {
        name: 'ripple',
        symbol: 'rpx',
        balance: 23,
        amountInCurrency: 59,
        icon: '',
        actionLink: '#'
    },
    {
        name: 'tether',
        symbol: 'usdt',
        balance: 1000,
        amountInCurrency: 1000,
        icon: '',
        actionLink: '#'
    }
    ]
</script>