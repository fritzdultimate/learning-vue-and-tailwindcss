<template>
    <ViewWrapper>
        <WalletList title="crypto wallets" :wallets="wallets" header="balance" :headerValue="'$5130.65'" subheader="6 crypto investments" />
    </ViewWrapper>
</template>

<script setup lang="ts">
    import ViewWrapper from '../partials/ViewWrapper.vue';
    import WalletList from '../../../common/components/list/WalletList.vue';

    const wallets = [
        {
            name: 'bitcoin',
            symbol: 'btc',
            balance: 234.54,
            amountInCurrency: 0.00256,
            icon: '',
            actionLink: '#'
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